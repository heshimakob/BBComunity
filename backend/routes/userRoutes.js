const express =require('express')
const mongoose = require('mongoose'); 
const router =express.Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User =require('../models/userModel')


const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    'your_jwt_secret',
    { expiresIn: '1d' }
  );
};

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
      return res.status(403).send({ message: 'Aucun token fourni.' });
  }

  jwt.verify(token.split(' ')[1], 'your_jwt_secret', (err, user) => {
      if (err) {
          return res.status(401).send({ message: 'Token invalide.' });
      }
      req.user = user;
      next();
  });
};
router.get('/userDetail', authMiddleware, async (req, res) => {
  try {
      const user = await User.findById(req.user.id).select('-password'); // Ne pas retourner le mot de passe
      if (!user) {
          return res.status(404).json({ message: 'Utilisateur non trouvé.' });
      }
      res.status(200).json(user);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

router.post('/register', async (req, res) => {
  const { name, email, password, isAdmin } = req.body;

  // Vérification de la présence des données
  if (!password) {
      return res.status(400).json({ message: 'Le mot de passe est requis.' });
  }

  // Vérifier si l'adresse mail est déjà utilisée
  const existingUser = await User.findOne({ email });
  if (existingUser) {
      return res.status(400).json({ message: 'Adresse mail déjà utilisée' });
  }

  try {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      
      const newUser = new User({ name, email, isAdmin, password: hashedPassword });
      
      await newUser.save();
      res.status(200).json({ success: true, message: 'Successfully registered' });
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});
router.post('/logout', async (req, res) => {
  // Si vous utilisez un mécanisme de stockage de session, supprimez le token ici
  // Par exemple, la suppression du token du client peut suffire.
  
  res.status(200).json({ message: 'Déconnexion réussie.' });
});







router.get('/getAllUsers', async (req, res) => {     
    try {         
        const user = await User.find({}); // Récupération des utilisateurs à partir de la base de données
        if (user.length === 0) {
            return res.status(404).json({ message: "Aucun blog trouvé." }); // Gestion du cas où aucun utilisateur n'est trouvé
        }
        res.json(user); // Envoi des blogs au client         
    } catch (error) {         
        res.status(500).json({ message: error.message }); // Gestion des erreurs     
    } 
});

router.put('/updateUser/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
  
    // Vérifier si l'utilisateur existe
    const existingUser = await User.findById(id);
    if (!existingUser) {
      return res.status(404).json({
        message: 'Utilisateur non trouvé',
      });
    }
  
    // Vérifier si l'adresse mail est déjà utilisée par un autre utilisateur
    const userWithSameEmail = await User.findOne({ email, _id: { $ne: id } });
    if (userWithSameEmail) {
      return res.status(400).json({
        message: 'Adresse mail déjà utilisée',
      });
    }
  
    // Hasher le mot de passe si il est modifié
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      req.body.password = hashedPassword;
    }
  
    try {
      const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json({
        success: true,
        message: 'Utilisateur mis à jour avec succès',
        data: updatedUser,
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  });




  // router.post('/signin', async (req, res) => {
  //   const { email, password } = req.body;
  //   const user = await User.findOne({ email });
  
  //   if (!user) {
  //     return res.status(401).json({
  //       message: 'Email ou mot de passe incorrect',
  //     });
  //   }
  
  //   const isValidPassword = await bcrypt.compare(password, user.password);
  
  //   if (!isValidPassword) {
  //     return res.status(401).json({
  //       message: 'Email ou mot de passe incorrect',
  //     });
  //   }
  
  //   res.status(200).json({
  //     success: true,
  //     user,
  //   });
  // });


  router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = generateToken(user);
      res.json({ token, isAdmin: user.isAdmin });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });
  
  router.delete('/deleteUser/:id', async (req, res) => {
    const { id } = req.params;
  
    // Vérifier si l'utilisateur existe
    const existingUser = await User.findById(id);
    if (!existingUser) {
      return res.status(404).json({
        message: 'Utilisateur non trouvé',
      });
    }
  
    try {
      await User.findByIdAndRemove(new mongoose.Types.ObjectId(id));
      res.status(200).json({
        success: true,
        message: 'Utilisateur supprimé avec succès',
      });
    } catch (error) {
      console.error(error); // Affiche l'erreur dans la console
      res.status(400).json({
        message: 'Erreur lors de la suppression de l\'utilisateur',
        error: error.message, // Affiche le message d'erreur
      });
    }
  });


  module.exports= router;
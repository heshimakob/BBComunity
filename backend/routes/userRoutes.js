const express =require('express')
const mongoose = require('mongoose'); 
const router =express.Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User =require('../models/userModel')
const multer = require('multer');
const transporter = require('../config/emailConfig');


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


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Dossier où vous souhaitez stocker les fichiers
  },
  filename: (req, file, cb) => {
      cb(null, file.originalname); // Vous pouvez personnaliser le nom si vous le souhaitez
  }
});

const upload = multer({ storage: storage });

// router.get('/userDetail', authMiddleware, async (req, res) => {
//   try {
//       const user = await User.findById(req.user.id).select('-password'); // Ne pas retourner le mot de passe
//       if (!user) {
//           return res.status(404).json({ message: 'Utilisateur non trouvé.' });
//       }
//       res.status(200).json(user);
//   } catch (error) {
//       res.status(500).json({ message: error.message });
//   }
// });

router.get('/userDetail', authMiddleware, async (req, res) => {
  try {
      const user = await User.findById(req.user.id).select('-password'); // Ne pas retourner le mot de passe
      if (!user) {
          return res.status(404).json({ message: 'Utilisateur non trouvé.' });
      }

      // Assurez-vous que le chemin de l'image est correct
      user.image = `${req.protocol}://${req.get('host')}/${user.image}`;

      res.status(200).json(user);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

router.post('/register', upload.single('image'), async (req, res) => {
  const { name, email, password, isAdmin ,genre} = req.body;
  const image = req.file; // Récupérer le fichier image

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

      // Créer un nouvel utilisateur, en ajoutant le chemin de l'image si elle existe
      const newUser = new User({
          name,
          email,
          genre,
          isAdmin,
          password: hashedPassword,
          image: image ? image.path : null // Ajouter le chemin de l'image si disponible
      });

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


router.post('/subscribe', (req, res) => {
  const { email } = req.body;

  // Configurer les options de courrier
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Subscription Confirmation',
    html: `
                      <div style="text-align: center; font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
            <img src="https://media.istockphoto.com/id/1921150261/photo/male-and-female-student-icons-on-wooden-blocks-education-concept-for-success.webp?a=1&b=1&s=612x612&w=0&k=20&c=6GB5plW0sNYmie_fivH_F6fncMrDbMKdFnKs4NTVQAg=" alt="Header Image" style="max-width: 100%; height: auto; margin-bottom: 20px;" />
            <h1 style="background-color: #4CAF50; color: white; padding: 10px; border-radius: 5px; margin: 0;">Black Born Community Academy</h1>
            <h2 style="margin: 20px 0;">Bonjour et Bienvenue,</h2>
            <p style="text-align: justify; margin: 0 20px;">Merci pour votre abonnement a notre newletter</p>
            <ul style="list-style-type: none; padding: 0; text-align: left; margin: 20px auto; width: fit-content;">
           
            </ul>
             <h1 style="background-color: red; color: white; padding: 10px; border-radius: 5px; margin: 0;">Beneficiez des opportunites qu'offre balck born community  </h1>
            <p style="text-align: justify; margin: 0 20px;">Greate</p>
            <p style="text-align: justify; margin: 0 20px;">Cordialement,<br>L'équipe d'inscription.</p>
            <p style="text-align: justify; margin: 0 20px;">Adresse mail: inscription@bbcommunity.academy</p>
            <p style="text-align: justify; margin: 0 20px;">Nos numéros de téléphone: +243999401974 (WhatsApp)</p>
            <img src="https://media.istockphoto.com/id/1921150261/photo/male-and-female-student-icons-on-wooden-blocks-education-concept-for-success.webp?a=1&b=1&s=612x612&w=0&k=20&c=6GB5plW0sNYmie_fivH_F6fncMrDbMKdFnKs4NTVQAg=" alt="Footer Image" style="max-width: 100%; height: auto; margin-top: 20px;" />
        </div>
                `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Failed to send email' });
    }
    res.status(200).json({ message: 'Subscription successful!' });
  });
});







router.get('/getAllUsers', authMiddleware, async (req, res) => {     
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

router.put('/update/:id', upload.single('image'), async (req, res) => {
  const { name, email, password, isAdmin, genre } = req.body;
  const image = req.file; // Récupérer le fichier image
  const userId = req.params.id; // ID de l'utilisateur à mettre à jour

  try {
      // Vérifier si l'utilisateur existe
      const existingUser = await User.findById(userId);

      console.log('ID de l’utilisateur à mettre à jour :', userId);
      if (!existingUser) {
          return res.status(404).json({ message: 'Utilisateur non trouvé' });
      }

      // Mettre à jour les données de l'utilisateur
      existingUser.name = name || existingUser.name; // Mettre à jour le nom s'il est fourni
      existingUser.email = email || existingUser.email; // Mettre à jour l'email s'il est fourni

      // Si un nouveau mot de passe est fourni, le hacher et le mettre à jour
      if (password) {
          const saltRounds = 10;
          const salt = await bcrypt.genSalt(saltRounds);
          existingUser.password = await bcrypt.hash(password, salt);
      }

      existingUser.isAdmin = isAdmin !== undefined ? isAdmin : existingUser.isAdmin; // Mettre à jour isAdmin s'il est fourni
      existingUser.image = image ? image.path : existingUser.image; // Mettre à jour l'image si donnée
      existingUser.genre = genre || existingUser.genre; // Mettre à jour le genre s'il est fourni

      await existingUser.save();

      res.status(200).json({ success: true, message: 'Utilisateur mis à jour avec succès' });
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});

// module.exports = router;

// router.put('/updateUser/:id', async (req, res) => {
//     const { id } = req.params;
//     const { name, email, password } = req.body;
  
//     // Vérifier si l'utilisateur existe
//     const existingUser = await User.findById(id);
//     if (!existingUser) {
//       return res.status(404).json({
//         message: 'Utilisateur non trouvé',
//       });
//     }
  
//     // Vérifier si l'adresse mail est déjà utilisée par un autre utilisateur
//     const userWithSameEmail = await User.findOne({ email, _id: { $ne: id } });
//     if (userWithSameEmail) {
//       return res.status(400).json({
//         message: 'Adresse mail déjà utilisée',
//       });
//     }
  
//     // Hasher le mot de passe si il est modifié
//     if (password) {
//       const hashedPassword = await bcrypt.hash(password, 10);
//       req.body.password = hashedPassword;
//     }
  
//     try {
//       const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
//       res.status(200).json({
//         success: true,
//         message: 'Utilisateur mis à jour avec succès',
//         data: updatedUser,
//       });
//     } catch (error) {
//       res.status(400).json({
//         message: error,
//       });
//     }
//   });




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
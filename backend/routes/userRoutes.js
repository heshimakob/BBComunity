const express =require('express')
const router =express.Router()
const bcrypt = require('bcrypt');
const User =require('../models/userModel')

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
  
    // Vérifier si l'adresse mail est déjà utilisée
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: 'Adresse mail déjà utilisée',
      });
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
  
    try {
      await newUser.save();
      res.status(200).json({
        success: true,
        message: 'Success register',
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  });


  router.post('/signout',async(res,req,next)=>{
    try {
      
      
    } catch (error) {
      
    }

  })





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




  router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
  
    if (!user) {
      return res.status(401).json({
        message: 'Email ou mot de passe incorrect',
      });
    }
  
    const isValidPassword = await bcrypt.compare(password, user.password);
  
    if (!isValidPassword) {
      return res.status(401).json({
        message: 'Email ou mot de passe incorrect',
      });
    }
  
    res.status(200).json({
      success: true,
      user,
    });
  });
  
  router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
  
    // Vérifier si l'utilisateur existe
    const existingUser = await User.findById(id);
    if (!existingUser) {
      return res.status(404).json({
        message: 'Utilisateur non trouvé',
      });
    }
  
    try {
      await User.findByIdAndRemove(id);
      res.status(200).json({
        success: true,
        message: 'Utilisateur supprimé avec succès',
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  });



  module.exports= router;
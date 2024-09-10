const express = require('express');
const router = express.Router();
const Blog = require('../models/blogModel');
router.post('/addBlog', async (req, res, next) => {
  const { titre, description, image, auteur, category } = req.body;

  // Vérifiez que toutes les données requises sont présentes 
  if (!titre || !description || !image || !auteur) {
      return res.status(400).json({
          success: false,
          message: 'Veuillez fournir tous les champs requis.'
      });
  }

  const newBlog = new Blog({
      titre,
      description,
      image,
      auteur,
      category
  });

  try {
      await newBlog.save(); // Utiliser await ici pour attendre la sauvegarde
      res.status(201).json({ // Utilisation du code HTTP 201 pour une ressource nouvellement créée
          success: true,
          message: 'Blog ajouté avec succès'
      });
  } catch (error) {
      res.status(400).json({
          success: false,
          message: error.message // Retourner seulement le message d'erreur
      });
  }
});
router.get('/getAllBlog', async (req, res) => {
  try {
    const blogs = await Blog.find({}); // Récupération des blogs à partir de la base de données
    if (blogs.length === 0) {
      return res.status(404).json({ message: "Aucun blog trouvé." }); // Gestion du cas où aucun blog n'est trouvé
    }
    res.json(blogs); // Envoi des blogs au client
  } catch (error) {
    res.status(500).json({ message: error.message }); // Gestion des erreurs
  }
});

router.get('/getRecentBlog', async (req, res) => {
  try {
    const data = await Blog.find().sort({ createdAt: -1 }).limit(3);
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ message: error.message }); // Gestion des erreurs
  }
});

router.get('/getBlog/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Blog.findById(id);
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ message: error.message }); // Gestion des erreurs
  }
});

// Nouvelle route pour mettre à jour un blog
router.put('/updateBlog/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { titre, description, image, auteur } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(id, { titre, description, image, auteur }, { new: true });
    res.status(200).json({
      success: true,
      message: 'Blog updated successfully'
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

// Nouvelle route pour supprimer un blog
router.delete('/deleteBlog/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndRemove(id);
    res.status(200).json({
      success: true,
      message: 'Blog deleted successfully'
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

module.exports = router;
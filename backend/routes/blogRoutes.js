const express = require('express');
const router = express.Router();
const Blog = require('../models/blogModel');
// const { updloadsFiles } = require('../middleware/multer');


// router.post('/addBlog', async (req, res, next) => {
//   const { titre, description, image, auteur, category } = req.body;

//   // Vérifiez que toutes les données requises sont présentes 
//   if (!titre || !description || !image || !auteur) {
//       return res.status(400).json({
//           success: false,
//           message: 'Veuillez fournir tous les champs requis.'
//       });
//   }

//   const newBlog = new Blog({
//       titre,
//       description,
//       image,
//       auteur,
//       category
//   });

//   try {
//       await newBlog.save(); // Utiliser await ici pour attendre la sauvegarde
//       res.status(201).json({ // Utilisation du code HTTP 201 pour une ressource nouvellement créée
//           success: true,
//           message: 'Blog ajouté avec succès'
//       });
//   } catch (error) {
//       res.status(400).json({
//           success: false,
//           message: error.message // Retourner seulement le message d'erreur
//       });
//   }
// });


// router.post('/addBlog',updloadsFiles, async (req, res) => {

//   const { titre, description, auteur, category } = req.body;
//   const image = req.file

//   await Blog.create({
//     titre,
//     description,
//     auteur,
//     category,
//     image: image?.path,
//   });
//   res.status(201).json({
//     message:"Blog ajouter ave success "
//   });
 
  
// });


const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Dossier où vous souhaitez stocker les fichiers
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Vous pouvez personnaliser le nom si vous le souhaitez
    }
});

const upload = multer({ storage: storage });

router.post('/addBlog', upload.single('image'), async (req, res) => {
    const { titre, description, auteur, category } = req.body;
    const image = req.file;

    // Assurez-vous de vérifier si le fichier existe avant de l'utiliser
    if (!image) {
        return res.status(400).json({ message: "Image required" });
    }

    await Blog.create({
        titre,
        description,
        auteur,
        category,
        image: image.path,
    });

    res.status(201).json({ message: "Blog added successfully" });
});
router.get('/getAllBlog', async (req, res) => {
  try {
      const blogs = await Blog.find(); // Retrait de .populate('author')
      const formattedBlogs = blogs.map(blog => ({
          ...blog.toObject(),
          image: `http://localhost:8080/${blog.image}`, // Assurez-vous que `blog.image` contient seulement le nom du fichier
      }));
      
      if (!formattedBlogs.length) {
          res.status(404).json({ message: 'Aucun blog trouvé' });
      } else {
          res.status(200).json(formattedBlogs);
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la récupération des blogs', erreur: error.message });
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

      if (!data) {
          return res.status(404).json({ message: 'Blog non trouvé' });
      }

      // Formater les données pour inclure l'URL de l'image
      const formattedData = {
          ...data.toObject(),
          image: `http://localhost:8080/${data.image}`, // Assurez-vous que `data.image` contient seulement le nom du fichier
      };

      res.status(200).json({ data: formattedData });
  } catch (error) {
      console.error(error);
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
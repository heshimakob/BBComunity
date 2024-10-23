const express = require('express');
const router = express.Router();
const Blog = require('../models/blogModel');
const multer = require('multer');

// Configuration de multer pour l'upload de fichiers
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Dossier où vous souhaitez stocker les fichiers
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Vous pouvez personnaliser le nom si vous le souhaitez
    }
});

const upload = multer({ storage: storage });

// Route pour ajouter un blog
router.post('/addBlog', upload.single('image'), async (req, res) => {
    const { titre, description, auteur, category } = req.body;
    const image = req.file;

    // Assurez-vous de vérifier si le fichier existe avant de l'utiliser
    if (!image) {
        return res.status(400).json({ message: "Image required" });
    }

    try {
        await Blog.create({
            titre,
            description,
            auteur,
            category,
            image: image.path,
        });

        res.status(201).json({ message: "Blog added successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route pour obtenir tous les blogs
router.get('/getAllBlog', async (req, res) => {
    try {
        const blogs = await Blog.find();
        const formattedBlogs = blogs.map(blog => ({
            ...blog.toObject(),
            image: `http://localhost:8080/${blog.image}`,
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
//blog recente 4
router.get('/getRecentBlogs', async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 }).limit(4);
        const formattedBlogs = blogs.map(blog => ({
            ...blog.toObject(),
            image: `http://localhost:8080/${blog.image}`,
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
// Route pour obtenir les blogs récents
router.get('/getRecentBlog', async (req, res) => {
    try {
        const data = await Blog.find().sort({ createdAt: -1 }).limit(3);
        res.status(200).json({ data: data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route pour obtenir un blog par ID
router.get('/getBlog/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Blog.findById(id);

        if (!data) {
            return res.status(404).json({ message: 'Blog non trouvé' });
        }

        const formattedData = {
            ...data.toObject(),
            image: `http://localhost:8080/${data.image}`,
        };

        res.status(200).json({ data: formattedData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

// Route pour mettre à jour un blog
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
            message: error.message,
        });
    }
});

// Route pour supprimer un blog
router.delete('/deleteBlog/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const existingBlog = await Blog.findById(id);
        if (!existingBlog) {
            return res.status(404).json({
                success: false,
                message: 'Blog non trouvé',
            });
        }

        await Blog.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: 'Blog supprimé avec succès',
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: 'Erreur lors de la suppression du blog',
            error: error.message,
        });
    }
});

module.exports = router;

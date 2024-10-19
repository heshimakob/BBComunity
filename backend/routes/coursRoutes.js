const express =require('express')
const mongoose = require('mongoose');
const router =express.Router()
const Cours =require('../models/coursModel')
const Chapitre= require ('../models/chapitreModel');
const Progress= require('../models/ProgressModel');



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

router.post('/addCours', upload.single('image'), async (req, res) => {
    const { name, description, duration, category } = req.body;
    const image = req.file;

    // Assurez-vous de vérifier si le fichier existe avant de l'utiliser
    if (!image) {
        return res.status(400).json({ message: "Image required" });
    }

    await Cours.create({
      name,
      description,
      duration,
      category,
      image: image?.path,
    });

    res.status(201).json({ message: "Cours added successfully" });
});


router.get('/getAllCours', async (req, res) => {
  try {
    const cours = await Cours.find().populate('chapitres');
    const formattedCours = cours.map(course => ({
      ...course.toObject(),
      image: `http://localhost:8080/${course.image}`, // Assurez-vous que `course.image` contient seulement le nom du fichier
    }));
    if (!formattedCours.length) {
      res.status(404).json({ message: 'Aucun cours trouvé' });
    } else {
      res.status(200).json(formattedCours);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des cours', erreur: error.message });
  }
});

router.get('/getLast', async (req, res) => {
  try {
    const cours = await Cours.find().sort({ createdAt: -1 }).limit(3).populate('chapitres');
    const formattedCours = cours.map(course => ({
      ...course.toObject(),
      image: `http://localhost:8080/${course.image}`, // Assurez-vous que course.image contient seulement le nom du fichier
    }));
    
    if (!formattedCours.length) {
      res.status(404).json({ message: 'Aucun cours trouvé' });
    } else {
      res.status(200).json(formattedCours);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des cours', erreur: error.message });
  }
});



//chapitre completed

router.put('/:courseId/:chapterId', async (req, res) => {
  const chapter = await Chapitre.findById(req.params.chapterId);
  chapter.completed = true;
  await Chapitre.save();
  res.json(Chapitre);
});


// Route pour ajouter un chapitre à un cours existant


router.post('/addChapitreCours/:id', upload.single('video'), async (req, res) => {
  try {
      // Récupérez le cours existant
      const cours = await Cours.findById(req.params.id);
      if (!cours) {
          return res.status(404).json({ erreur: 'Cours non trouvé' });
      }

      // Créez un nouveau chapitre
      const { titre, contenu, lien } = req.body;
      const videoPath = req.file ? req.file.path : null; // Vérifiez si la vidéo a été téléchargée

      const chapitre = await Chapitre.create({
          titre,
          contenu,
          lien,
          video: videoPath ? `http://localhost:8080/${videoPath}` : null, // Ajoutez le chemin vidéo au nouveau chapitre
          cours: cours._id,
      });

      res.status(201).json({ message: 'Chapitre ajouté avec succès', chapitre });
  } catch (err) {
      console.error(err);
      res.status(500).json({ erreur: `Erreur lors de l'ajout du chapitre: ${err.message}` });
  }
});





//essay de recuperer les cours 

router.get('/cours/:id/chapitres', async (req, res) => {
  try {
    // Récupérez le cours existant
    const cours = await Cours.findById(req.params.id).populate('chapitres');
    if (!cours) {
      return res.status(404).json({ erreur: 'Cours non trouvé' });
    }

    // Retournez les chapitres associés au cours
    res.status(200).json({
      message: 'Chapitres trouvés avec succès',
      chapitres: cours.chapitres
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ erreur: `Erreur lors de la récupération des chapitres: ${err.message}` });
  }
});






//Nouvelle methodologie petit ce code fonctionne normalement

router.get('/getChapitres/:id', async (req, res) => {
  try {
    const courseId = req.params.id;
    const chapitres = await Chapitre.find({ cours: courseId }).populate('cours');
    console.log(chapitres);
    res.json(chapitres);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erreur: `Erreur lors de la récupération des chapitres du cours: ${err.message}` });
  }
});




//Averifier si ca fonctionne normalement
router.get('/getSingleChapitre/:id', async (req, res) => {
  try {
  
   const chapitre =await Chapitre.findById(req.params.id)
   res.json({chapitre})

    // ...
  } catch (err) {
    console.error(err);
    res.status(500).json({ erreur: `Erreur lors de la récupération du cours: ${err.message}` });
  }
});



//ma boro tu 




// Route pour mettre à jour un cours
  router.put('/updateCourse/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, image,link } = req.body;
      const updatedCourse = await Course.findByIdAndUpdate(id, { title, description, image, instructor }, { new: true });
      res.status(200).json({
        success: true,
        message: 'Course updated successfully'
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  });


  // Route pour supprimer un cours
  router.delete('/deleteCourse/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      // Vérifiez si l'ID est valide
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
          success: false,
          message: 'ID de cours invalide',
        });
      }
  
      // Supprimez le cours par ID
      const deletedCourse = await Cours.findByIdAndDelete(id);
  
      // Vérifiez si le cours a été trouvé et supprimé
      if (!deletedCourse) {
        return res.status(404).json({
          success: false,
          message: 'Cours non trouvé',
        });
      }
  
      res.status(200).json({
        success: true,
        message: 'Cours supprimé avec succès',
      });
    } catch (error) {
      console.error('Erreur lors de la suppression du cours:', error);
      res.status(500).json({
        success: false,
        message: 'Erreur serveur lors de la suppression du cours',
        error: error.message, // Ajoutez ceci pour plus de détails sur l'erreur
      });
    }
  });
  






  // code a verifier le 19 spetembre 2024 su r la progression de cours  et un frgmen tde code qui doit etre contenue je crois dna le chapitre mais il e sla on le commente


//   router.post('/addProgress', async (req, res) => {
//     try {
//         const { chapitres, cours } = req.body;

//         // Vérifier si req.user est défini
//         if (!req.user || !req.user._id) {
//             return res.status(401).json({ message: "Utilisateur non authentifié" });
//         }

//         let progress = await Progress.findOne({ user: req.user._id, cours: cours });

//         if (!progress) {
//             progress = await Progress.create({
//                 user: req.user._id,
//                 course: cours,
//                 completedLecture: []
//             });
//         }

//         if (progress.completedLecture.includes(chapitres)) {
//             return res.json({ message: "Progress already recorded." });
//         }

//         progress.completedLecture.push(chapitres);
//         await progress.save();

//         res.status(201).json({ message: "New progress added successfully" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Error adding progress", error: error.message });
//     }
// });
router.post('/addProgress',authMiddleware, async (req, res) => {
  const { chapitres, cours } = req.body;
  try {
    let progression = await Progress.findOne({ user: req.user._id, cours });

    if (progression) {
      if (!progression.chapitres.includes(chapitres)) {
        progression.chapitres.push(chapitres);
      }
    } else {
      progression = new Progress({
        user: req.user._id,
        cours,
        chapitres: [chapitres]
      });
    }

    await progression.save();

    res.json(progression);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});


router.get('/getProgress', async (req, res) => {
  const { cours } = req.query;

  if (!cours) {
      return res.status(400).json({ msg: 'Le paramètre cours est requis.' });
  }

  try {
      const progression = await Progress.findOne({ user: req.user.id, cours });

      if (progression) {
          const totalChapters = await Chapitre.countDocuments({ cours });
          const completedChapters = progression.chapitres.length;
          const coursProgressPourcentage = totalChapters > 0 ? (completedChapters / totalChapters) * 100 : 0;

          return res.json({ coursProgressPourcentage });
      } else {
          return res.json({ coursProgressPourcentage: 0 });
      }
  } catch (error) {
      console.error(error.message);
      return res.status(500).send('Erreur du serveur');
  }
});







module.exports = router;
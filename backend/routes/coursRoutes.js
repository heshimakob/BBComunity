const express =require('express')
const mongoose = require('mongoose');
const router =express.Router()
const Cours =require('../models/coursModel')
const Chapitre= require ('../models/chapitreModel');
const { updloadsFiles } = require('../middleware/multer');

//code add cours plus fonctionnel que jamais

router.post('/addCours',updloadsFiles, async (req, res) => {

    const { name, description,duration,category } = req.body;
    const image = req.file

    await Cours.create({
      name,
      description,
      duration,
      category,
      image: image?.path,
    });
    res.status(201).json({
      message:"cours cree avec success "
    });
   
    
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

//chapitre completed

router.put('/:courseId/:chapterId', async (req, res) => {
  const chapter = await Chapitre.findById(req.params.chapterId);
  chapter.completed = true;
  await Chapitre.save();
  res.json(Chapitre);
});


// Route pour ajouter un chapitre à un cours existant


router.post('/addChapitreCours/:id', async (req, res) => {
  try {
    // Récupérez le cours existant
    const cours = await Cours.findById(req.params.id);
    if (!cours) {
      return res.status(404).json({ erreur: 'Cours non trouvé' });
    }

    // Créez un nouveau chapitre
    const {titre,contenu,lien}=req.body
    const chapitre = await Chapitre.create({
      titre,
      contenu,
      lien,
      cours: cours._id
    });
    res.status(201).json({
      message: 'Chapitre ajouté avec succès',
      chapitre
    })

   
  } catch (err) {
    console.error(err);
    res.status(500).json({ erreur: `Erreur lors de l'ajout du chapitre: ${err.message}` });
  }
});













// router.get('/getCours/:courseId', (req, res) => {
//   const courseId = req.params.courseId;

//   Cours.findById(courseId)
//     .populate({
//       path: 'chapitres',
//       model: 'Chapitre'
//     })
//     .then((Cours) => {
//       console.log(Cours); // log the entire cours document
//       console.log(Cours.chapitres); // log the chapitres array
//       res.json(Cours.chapitres);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({ error: 'Erreur lors de la récupération des données' });
//     });
// });




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
      await Course.findByIdAndRemove(id);
      res.status(200).json({
        success: true,
        message: 'Course deleted successfully'
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  });





    // Route pour récupérer tous les cours
    // router.get('/getAllCours', async (req, res) => {
    //   try {
    //     const cours = await Cours.find({}); // Récupération des blogs à partir de la base de données
    //     if (blogs.length === 0) {
    //       return res.status(404).json({ message: "Aucun blog trouvé." }); // Gestion du cas où aucun blog n'est trouvé
    //     }
    //     res.json(cours); // Envoi des blogs au client
    //   } catch (error) {
    //     res.status(500).json({ message: error.message }); // Gestion des erreurs
    //   }
    // });








// // Route pour créer un nouveau cours
// router.post('/addCourse', (req, res) => {
//     const { title, description, image, instructor } = req.body;
//     const newCourse = new Course({ title, description, image, instructor });
//     try {
//       newCourse.save();
//       res.status(200).json({
//         success: true,
//         message: 'Success add course'
//       });
//     } catch (error) {
//       res.status(400).json({
//         message: error,
//       });
//     }
//   });
  
// 
  
//   
  
//   
  
//   
  
//   
//   // Route pour récupérer tous les chapitres d'un cours
//   router.get('/getAllChapters/:courseId', async (req, res) => {
//     try {
//       const course = await Course.findById(req.params.courseId);
//       const chapters = await Chapter.find({ _id: { $in: course.chapters } });
//       res.json(chapters); // Envoi des chapitres au client
//     } catch (error) {
//       res.status(500).json({ message: error.message }); // Gestion des erreurs
//     }
//   });
  
//   // Route pour récupérer les détails d'un chapitre
//   router.get('/getChapter/:id', async (req, res) => {
//     try {
//       const { id } = req.params;
//       const data = await Chapter.findById(id);
//       res.status(200).json({ data: data });
//     } catch (error) {
//       res.status(500).json({ message: error.message }); // Gestion des erreurs
//     }
//   });
  
//   // Route pour mettre à jour un chapitre
//   router.put('/updateChapter/:id', async (req, res) => {
//     try {
//       const { id } = req.params;
//       const { title, description, video } = req.body;
//       const updatedChapter = await Chapter.findByIdAndUpdate(id, { title, description, video }, { new: true });
//       if (!updatedChapter) {
//         return res.status(404).json({
//           success: false,
//           message: 'Chapter not found'
//         });
//       }
//       res.status(200).json({
//         success: true,
//         message: 'Chapter updated successfully'
//       });
//     } catch (error) {
//       res.status(500).json({
//         success: false,
//         message: error.message
//       });
//     }
//   });

module.exports = router;
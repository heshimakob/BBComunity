const express =require('express')
const router =express.Router()
const Cours =require('../models/coursModel')
const Chapitre= require ('../models/chapitreModel')

router.post('/addCours', async (req, res) => {
  try {
    const { name, description, image } = req.body;
    if (!name || !description || !image) {
      return res.status(400).json({ message: 'Tous les champs sont requis' });
    }
    const cours = new Cours({ name, description, image });
    await cours.save();
    res.status(201).json({ message: 'Cours ajouté avec succès' });
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de l\'ajout du cours' });
  }
});

router.get('/getAllcours', async (req, res) => {
  try {
    const cours = await Cours.find().populate('Chapitre');
    if (!cours) {
      res.status(404).json({ message: 'Aucun cours trouvé' });
    } else {
      res.status(200).json(cours);
    }
  } catch (error) {
    console.error(error); // Affiche l'erreur dans la console
    res.status(500).json({ message: 'Erreur lors de la récupération des cours', erreur: error.message });
  }
});

// Route pour ajouter un chapitre à un cours existant


router.post('/addChapitreCours', async (req, res) => {
  try {
    // Récupérez le cours existant
    const cours = await Cours.findById(req.body.idCours);
    if (!cours) {
      return res.status(404).json({ erreur: 'Cours non trouvé' });
    }

    // Créez un nouveau chapitre
    const chapitre = new Chapitre({
      titre: req.body.titre,
      contenu: req.body.contenu,
      lien:req.body.lien,
    });

    // Ajoutez le chapitre au cours
    cours.chapitres.push(chapitre);
    await cours.save();

    // Retournez le chapitre créé
    res.json(chapitre);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erreur: `Erreur lors de l'ajout du chapitre: ${err.message}` });
  }
});














//la routes pour reccupere les details des cours vacs les cpaitres 

router.get('/courses/:courseId', (req, res) => {
  const courseId = req.params.courseId;
  Course.findById(courseId)
    .populate('chapters')
    .then(course => {
      res.json(course.chapters);
    })
    .catch(err => {
      res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    });
});

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


  // Route pour créer un nouveau chapitre dans un cours
  router.post('/addChapter/:courseId', async (req, res) => {
    const { title, description, video } = req.body;
    const newChapter = new Chapter({ title, description, video });
    try {
      await newChapter.save();
      const course = await Course.findById(req.params.courseId);
      if (!course) {
        return res.status(404).json({
          success: false,
          message: 'Course not found'
        });
      }
      course.chapters.push(newChapter._id);
      await course.save();
      res.status(200).json({
        success: true,
        message: 'Success add chapter'
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


router.get('/getCour/:id', async (req, res) => {     
    try {         
       // Gestion du cas où aucun blog n'est trouvé

       const {id}=req.params;
       const data =await Cours.findById(id);
       res.status(200).json({data:data});
        
             
    } catch (error) {         
        res.status(500).json({ message: error.message }); // Gestion des erreurs     
    } 
});
module.exports= router;





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

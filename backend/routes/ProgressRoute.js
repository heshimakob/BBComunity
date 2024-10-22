// const express = require('express');
// const mongoose = require('mongoose');
// const router = express.Router();
// const jwt = require('jsonwebtoken');

// const Cours = require('../models/coursModel');
// const Chapitre = require('../models/chapitreModel');
// const Progress = require('../models/ProgressModel');
// const User=require('../models/userModel')

// // Middleware d'authentification
// const authMiddleware = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   if (!authHeader) {
//       return res.status(403).send({ message: 'Aucun token fourni.' });
//   }

//   const token = authHeader.split(' ')[1];
//   if (!token) {
//       return res.status(403).send({ message: 'Format de token invalide.' });
//   }

//   console.log("Token JWT:", token); // Log pour débogage

//   jwt.verify(token, 'your_jwt_secret', (err, user) => {
//       if (err) {
//           return res.status(401).send({ message: 'Token invalide.' });
//       }
//       req.user = user;
//       console.log("Utilisateur récupéré:", req.user);
//       next();
//   });
// };

// // Route pour ajouter la progression
// router.post('/addProgress', authMiddleware, async (req, res) => {
//   const { chapitres, cours} = req.body;

//   if (!chapitres || !cours ) {
//       return res.status(400).send({ message: 'Les paramètres chapitres et cours sont requis.' });
//   }

//   try {
//       console.log("ID de l'utilisateur:", req.user._id);
//       let progression = await Progress.findOne({ user: req.user._id, cours });

//       if (progression) {
//           if (!progression.chapitres.includes(chapitres)) {
//               progression.chapitres.push(chapitres);
//           }
//       } else {
//           progression = new Progress({
//               user: req.user._id,
//               cours,
//               chapitres: [chapitres]
//           });
//       }

//       await progression.save();
//       res.json(progression);
//   } catch (error) {
//       console.error(error.message);
//       res.status(500).send('Erreur du serveur');
//   }
// });


// // Récupérer la progression
// router.get('/getProgress', authMiddleware, async (req, res) => {
//   const { cours } = req.query;

//   if (!cours) {
//       return res.status(400).json({ msg: 'Le paramètre cours est requis.' });
//   }

//   try {
//       const progression = await Progress.findOne({ user: req.user._id, cours }).populate('chapitres');

//       if (progression) {
//           const totalChapters = progression.chapitres.length; // Récupérer le nombre total de chapitres terminés
//           return res.json({ chapitres: progression.chapitres, totalChapters });
//       } else {
//           return res.json({ chapitres: [], totalChapters: 0 });
//       }
//   } catch (error) {
//       console.error(error.message);
//       return res.status(500).send('Erreur du serveur');
//   }
// });

// module.exports = router;

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const jwt = require('jsonwebtoken');

const Cours = require('../models/coursModel');
const Chapitre = require('../models/chapitreModel');
const Progress = require('../models/ProgressModel');
const User = require('../models/userModel');

// Middleware d'authentification
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
      return res.status(403).send({ message: 'Aucun token fourni.' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
      return res.status(403).send({ message: 'Format de token invalide.' });
  }

  console.log("Token JWT:", token); // Log pour débogage

  jwt.verify(token, 'your_jwt_secret', (err, user) => {
      if (err) {
          return res.status(401).send({ message: 'Token invalide.' });
      }
      req.user = user;
      console.log("Utilisateur récupéré:", req.user);
      next();
  });
};

// Route pour ajouter la progression
router.post('/addProgress', authMiddleware, async (req, res) => {
  const { chapitres, cours } = req.body;

  if (!chapitres || !cours) {
      return res.status(400).send({ message: 'Les paramètres chapitres et cours sont requis.' });
  }

  try {
      const userId = req.user.id; // Assurez-vous que l'ID de l'utilisateur est correct
      console.log("ID de l'utilisateur:", userId);
      
      let progression = await Progress.findOne({ user: userId, cours });

      if (progression) {
          if (!progression.chapitres.includes(chapitres)) {
              progression.chapitres.push(chapitres);
          }
      } else {
          progression = new Progress({
              user: userId,
              cours,
              chapitres: [chapitres]
          });
      }

      await progression.save();
      res.json(progression);
  } catch (error) {
      console.error(error.message);
      res.status(500).send('Erreur du serveur');
  }
});

// Récupérer la progression
router.get('/getProgress', authMiddleware, async (req, res) => {
  const { cours } = req.query;

  if (!cours) {
      return res.status(400).json({ msg: 'Le paramètre cours est requis.' });
  }

  try {
      const progression = await Progress.findOne({ user: req.user.id, cours }).populate('chapitres');

      if (progression) {
          const totalChapters = progression.chapitres.length; // Récupérer le nombre total de chapitres terminés
          return res.json({ chapitres: progression.chapitres, totalChapters });
      } else {
          return res.json({ chapitres: [], totalChapters: 0 });
      }
  } catch (error) {
      console.error(error.message);
      return res.status(500).send('Erreur du serveur');
  }
});

module.exports = router;


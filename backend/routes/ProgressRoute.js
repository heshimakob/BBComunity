const express =require('express')
const mongoose = require('mongoose');
const router =express.Router();
const jwt = require('jsonwebtoken');

const Cours =require('../models/coursModel')
const Chapitre= require ('../models/chapitreModel');
const Progress= require('../models/ProgressModel');


const authMiddleware = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: 'Aucun token, autorisation refusée' });
    }

    try {
        const decoded = jwt.verify(token, 'votre_clé_secrète');
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({ msg: 'Token non valide' });
    }
};

router.use(authMiddleware); 

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
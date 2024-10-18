const express = require('express');
const router = express.Router();
const Candidate = require('../models/candidateSchema');
const transporter = require('../config/emailConfig');

router.post('/AddCandidate', (req, res) => {
    const { name, email, genre, phoneNumber, domaine, password } = req.body;

    // Vérifiez que le champ 'domaine' est fourni
    if (!domaine) {
        return res.status(400).json({ 
            success: false, 
            message: "Le champ 'domaine' est requis." 
        });
    }

    const newCandidate = new Candidate({ 
        name, 
        genre, 
        email, 
        phoneNumber, 
        domaine, 
        password,
        statut: 'Pending' // Ajoutez le statut par défaut
    });

    newCandidate.save()
        .then(() => {
            // Envoyer un email de confirmation
            const mailOptions = {
                from: 'heshimakob@gmail.com',
                to: email,
                subject: 'Confirmation de votre inscription',
                html: `
                      <div style="text-align: center; font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
            <img src="https://media.istockphoto.com/id/1921150261/photo/male-and-female-student-icons-on-wooden-blocks-education-concept-for-success.webp?a=1&b=1&s=612x612&w=0&k=20&c=6GB5plW0sNYmie_fivH_F6fncMrDbMKdFnKs4NTVQAg=" alt="Header Image" style="max-width: 100%; height: auto; margin-bottom: 20px;" />
            <h1 style="background-color: #4CAF50; color: white; padding: 10px; border-radius: 5px; margin: 0;">Black Born Community Academy</h1>
            <h2 style="margin: 20px 0;">Bonjour et Bienvenue ${name},</h2>
            <p style="text-align: justify; margin: 0 20px;">Votre candidature a été soumise avec succès. Voici les détails:</p>
            <ul style="list-style-type: none; padding: 0; text-align: left; margin: 20px auto; width: fit-content;">
                <li><strong>Nom:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Genre:</strong> ${genre}</li>
                <li><strong>Numéro de téléphone:</strong> ${phoneNumber}</li>
                <li><strong>Domaine:</strong> ${domaine}</li>
            </ul>
             <h1 style="background-color: red; color: white; padding: 10px; border-radius: 5px; margin: 0;">Votre compte sera operationnel deux jours avant ouverture de bootcamps </h1>
            <p style="text-align: justify; margin: 0 20px;">Merci pour votre candidature.</p>
            <p style="text-align: justify; margin: 0 20px;">Cordialement,<br>L'équipe d'inscription.</p>
            <p style="text-align: justify; margin: 0 20px;">Adresse mail: inscription@bbcommunity.academy</p>
            <p style="text-align: justify; margin: 0 20px;">Nos numéros de téléphone: +243999401974 (WhatsApp)</p>
            <img src="https://media.istockphoto.com/id/1921150261/photo/male-and-female-student-icons-on-wooden-blocks-education-concept-for-success.webp?a=1&b=1&s=612x612&w=0&k=20&c=6GB5plW0sNYmie_fivH_F6fncMrDbMKdFnKs4NTVQAg=" alt="Footer Image" style="max-width: 100%; height: auto; margin-top: 20px;" />
        </div>
                `
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Erreur lors de l\'envoi de l\'email:', error);
                } else {
                    console.log('Email envoyé: ' + info.response);
                }
            });

            res.status(200).json({ 
                success: true, 
                message: 'Candidate submitted' 
            });
        })
        .catch(error => {
            res.status(400).json({ 
                message: error.message, 
            });
        });
});
router.put('/updateStatus/:id', async (req, res) => {
    const { status } = req.body;
  
    if (!['submitted', 'Pending'].includes(status)) {
      return res.status(400).json({ message: 'Statut invalide.' });
    }
  
    try {
      const updatedCandidate = await Candidate.findByIdAndUpdate(
        req.params.id,
        { status: status },
        { new: true }
      );
  
      if (!updatedCandidate) {
        return res.status(404).json({ message: 'Candidat non trouvé.' });
      }
  
      res.status(200).json(updatedCandidate);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du candidat:', error);
      res.status(500).json({ message: 'Erreur serveur.' });
    }
  });

router.get('/getAllCandidates', async (req, res) => {
    try {
        const candidates = await Candidate.find();
        res.status(200).json(candidates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

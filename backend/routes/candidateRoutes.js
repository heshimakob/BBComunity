const express =require('express')
const router =express.Router()
const Candidate =require('../models/candidateSchema')

router.post('/AddCandidate', (req, res) => {
    const { name, email, genre, phoneNumber, domaine,password } = req.body;

    // Vérifiez que le champ 'domaine' est fourni
    if (!domaine) {
        return res.status(400).json({ 
            success: false, 
            message: "Le champ 'domaine' est requis." 
        });
    }

    const newCandidate = new Candidate({ name, genre, email, phoneNumber, domaine,password });

    newCandidate.save()
        .then(() => {
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
module.exports= router;
// router.post('/AddCandidate', (req, res) => {
//     const { email, phoneNumber, genre, domain, password } = req.body;

//     // Ici, vous pouvez ajouter votre logique pour enregistrer les données dans la base de données.

//     console.log('Données reçues:', {
//         email,
//         numero,
//         genre,
//         domain,
//         password,
//     });

//     res.status(201).send({ message: 'Candidat ajouté avec succès' });
// });

// app.listen(PORT, () => {
//     console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
// });


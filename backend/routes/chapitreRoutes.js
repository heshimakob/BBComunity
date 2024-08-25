const express =require('express')
const router =express.Router()
const Chapitres =require('../models/chapitreModel')

router.post('/addChapitre', (req, res)=>{
    const {titre, contenu, lien}=req.body
    const newChapitre = new Chapitres ({titre, contenu,lien })
    try{
        newChapitre.save()
        res.status(200).json({
            success:true,
            message:'Success chapter added'
        })
    } catch(error){
        res.status(400).json({
            message:error,
        });
    }
});



module.exports= router;
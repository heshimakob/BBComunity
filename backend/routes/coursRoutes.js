const express =require('express')
const router =express.Router()
const User =require('../models/coursModel')

router.post('/cours', (req, res)=>{
    const {name,email,password,coho}=req.body
    const newCours = new Cours ({name,email,password,coho})
    try{
        newCours.save()
        res.status(200).json({
            success:true,
            message:'Success course added'
        })
    } catch(error){
        res.status(400).json({
            message:error,
        });
    }
});
module.exports= router;
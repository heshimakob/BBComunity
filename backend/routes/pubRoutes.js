const express =require('express')
const router =express.Router()
const User =require('../models/pubModel')

router.post('/pub', (req, res)=>{
    const {name,email,password,coho}=req.body
    const newPub = new Pub ({name,email,password,coho})
    try{
        newPub.save()
        res.status(200).json({
            success:true,
            message:'poste added success'
        })
    } catch(error){
        res.status(400).json({
            message:error,
        });
    }
});
module.exports= router;

const express =require('express')
const router =express.Router()
const User =require('../models/userModel')

router.post('/register', (req, res)=>{
    const {name,email,password,coho}=req.body
    const newUser = new User ({name,email,password,coho})
    try{
        newUser.save()
        res.status(200).json({
            success:true,
            message:'Success register'
        })
    } catch(error){
        res.status(400).json({
            message:error,
        });
    }
});
module.exports= router;

const express =require('express')
const router =express.Router()
const User =require('../models/eventModel')

router.post('/event', (req, res)=>{
    const {name,email,password,coho}=req.body
    const newEvent = new Events ({name,email,password,coho})
    try{
        newEvent.save()
        res.status(200).json({
            success:true,
            message:'Events added success '
        })
    } catch(error){
        res.status(400).json({
            message:error,
        });
    }
});
module.exports= router;

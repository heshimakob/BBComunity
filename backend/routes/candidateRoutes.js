const express =require('express')
const router =express.Router()
const User =require('../models/candidateSchema')

router.post('/candidate', (req, res)=>{
    const {name,email,pays,numero}=req.body
    const newCandidate = new Candidate ({name,email,pays,numero})
    try{
        newCandidate.save()
        res.status(200).json({
            success:true,
            message:'Candidate submited'
        })
    } catch(error){
        res.status(400).json({
            message:error,
        });
    }
});
module.exports= router;

const express =require('express')
const router =express.Router()
const User =require('../models/companyModel')

router.post('/company', (req, res)=>{
    const {name,email,adress,numero,contenu}=req.body
    const newCompany = new company ({name,email,adress,numero, contenu})
    try{
        newCompany.save()
        res.status(200).json({
            success:true,
            message:'Company submited'
        })
    } catch(error){
        res.status(400).json({
            message:error,
        });
    }
});
module.exports= router;

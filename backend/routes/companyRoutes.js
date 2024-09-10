const express =require('express')
const router =express.Router()
const Company =require('../models/companyModel')

router.post('/addCompany', (req, res)=>{
    const {name,email,adress,numero,motif}=req.body
    const newCompany = new Company ({name,email,adress,numero, motif})
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

const express =require('express')
const router =express.Router()
const Blog =require('../models/blogModel')

router.post('/addBlog', (req, res)=>{
    const {titre,description,image,auteur}=req.body
    const newUser = new Blog ({titre,description,image,auteur})
    try{
        newUser.save()
        res.status(200).json({
            success:true,
            message:'Success add blog'
        })
    } catch(error){
        res.status(400).json({
            message:error,
        });
    }
});


router.get('/getAllBlog', async(req,res)=>{
    try {
        const blogs =await blogModel.find({})
        res.send(blogs)
        
    } catch (error) {
        res.json({message:error})
        
    }
});


module.exports= router;




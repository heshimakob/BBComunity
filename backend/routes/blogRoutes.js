const express =require('express')
const router =express.Router()
const blogModel =require('../models/blogModel')

router.post('/addBlog', (req, res)=>{
    const {titre,description,image,auteur}=req.body
    const newBlog = new Blog ({titre,description,image,auteur})
    try{
        newBlog.save()
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


// router.get('/getAllBlog', async(req,res)=>{
//     try {
//         const blogs =await blogModel.find({})
//         res.send(blogs)
        
//     } catch (error) {
//         res.json({message:error})
        
//     }
// });

router.get('/getAllBlog', async (req, res) => {     
    try {         
        const blog = await blogModel.find({}); // Récupération des blogs à partir de la base de données
        if (blog.length === 0) {
            return res.status(404).json({ message: "Aucun blog trouvé." }); // Gestion du cas où aucun blog n'est trouvé
        }
        res.json(blog); // Envoi des blogs au client         
    } catch (error) {         
        res.status(500).json({ message: error.message }); // Gestion des erreurs     
    } 
});


module.exports= router;




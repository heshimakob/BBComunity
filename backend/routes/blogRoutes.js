const express =require('express')
const router =express.Router()
const Blog =require('../models/blogModel')

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
        
//     } catch (error) {export const GET_BLOGS ="GET_BLOGS"



router.get('/getAllBlog', async (req, res) => {     
    try {         
        const blogs = await Blog.find({}); // Récupération des blogs à partir de la base de données
        if (blogs.length === 0) {
            return res.status(404).json({ message: "Aucun blog trouvé." }); // Gestion du cas où aucun blog n'est trouvé
        }
        res.json(blogs); // Envoi des blogs au client         
    } catch (error) {         
        res.status(500).json({ message: error.message }); // Gestion des erreurs     
    } 
});



router.get('/getRecentBlog', async (req, res) => {     
    try {         
       // Gestion du cas où aucun blog n'est trouvé

   
       const data =await Blog.find().sort ({createdAt: -1}).limit(3);
       res.status(200).json({data:data});
        
             
    } catch (error) {         
        res.status(500).json({ message: error.message }); // Gestion des erreurs     
    } 
});






router.get('/getBlog/:id', async (req, res) => {     
    try {         
       // Gestion du cas où aucun blog n'est trouvé

       const {id}=req.params;
       const data =await Blog.findById(id);
       res.status(200).json({data:data});
        
             
    } catch (error) {         
        res.status(500).json({ message: error.message }); // Gestion des erreurs     
    } 
});


module.exports= router;




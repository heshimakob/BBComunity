const express =require('express')
const router =express.Router()
const Cours =require('../models/coursModel')

router.post('/postCours', (req, res)=>{
    const {name,email,password,coho}=req.body
    const newCours = new Cours ({name,titre,password,coho})
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

router.get('/getCour/:id', async (req, res) => {     
    try {         
       // Gestion du cas où aucun blog n'est trouvé

       const {id}=req.params;
       const data =await Cours.findById(id);
       res.status(200).json({data:data});
        
             
    } catch (error) {         
        res.status(500).json({ message: error.message }); // Gestion des erreurs     
    } 
});
module.exports= router;

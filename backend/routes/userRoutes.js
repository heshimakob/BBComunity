const express =require('express')
const router =express.Router()
const User =require('../models/userModel')

router.post('/addUser', (req, res)=>{
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



router.get('/getAllUser', async (req, res) => {     
    try {         
        const user = await User.find({}); // Récupération des utilisateurs à partir de la base de données
        if (user.length === 0) {
            return res.status(404).json({ message: "Aucun blog trouvé." }); // Gestion du cas où aucun utilisateur n'est trouvé
        }
        res.json(user); // Envoi des blogs au client         
    } catch (error) {         
        res.status(500).json({ message: error.message }); // Gestion des erreurs     
    } 
});
module.exports= router;



router.post('/signin',async(req,res)=>{
    const{email,password} =req.body
    try {
        const user =await User.find({email,password})
        if (user.length  > 0){
            const currentUser={
                name:user[0].name,
                email:user[0].email,
                isAdmin:user[0].isAdmin,
                _id:user[0].Id
            }
            res.status(200).send(currentUser)
        }else{
            res.status(400).json({
                message:'login fail'
            })
        }
        
    } catch (error) {
        
        res.status(404).json({
            message:'wrong'
        })
    }
});

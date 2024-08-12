const express =require('express')
const router =express.Router()
const User =require('../models/notificationModel')

router.post('/notifications', (req, res)=>{
    const {notifications}=req.body
    const newNotification = new Notifications ({notifications})
    try{
        newNotification.save()
        res.status(200).json({
            success:true,
            message:'Notifications added success '
        })
    } catch(error){
        res.status(400).json({
            message:error,
        });
    }
});
module.exports= router;

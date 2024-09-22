const express = require('express');
const Chat = require('../models/chatModel');

const router = express.Router();



router.post('/createChat', async (req, res) => {

 const newChat=new Chat({
    members:[req.body.senderId, req.body.receiverId]
 });
 try {
    const result= await newChat.save();
    res.status(201).json(result);
    
 } catch (error) {
    res.status(500).json(error)
    
 }

});


router.get('/userChat/:userId', async (req, res) => {
    try {
        const chat = await Chat.find({ members:{$in:[req.params.userId] }});
        res.status(200).json(chat);
        
    } catch (error) {
        res.status(500).json(error)
        
    }

 

});

router.get('/findChat/:firstId/:secondId', async (req, res) => {
    try {
        const chat= await Chat.findOne({
            members:{$all:[req.params.firstId,req.params.secondId]}
        })
        res.status(200).json(chat)
        
    } catch (error) {
        res.status(500).json(error)
        
    }

 

});

module.exports = router;

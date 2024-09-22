const express = require('express');
const Message = require('../models/messageModel');

const router = express.Router();



router.post('/addMessage', async (req, res) => {
    const {chatId,senderId,text}=req.body
    const message= new Message({
        chatId,
        senderId,
        text
    });
    try {
        const result= await message.save();
        res.status(201).json(result);
        
    } catch (error) {

        res.status(500).json(error)
        
    }



});


router.get('/getMessage/:chatId', async (req, res) => {
    const {chatId}=req.params;
    try {
        const result =await Message.find({chatId});
        res.status(500).json(result)

        
    } catch (error) {
        res.status(500).json(error)
        
    }

 

});


module.exports = router;

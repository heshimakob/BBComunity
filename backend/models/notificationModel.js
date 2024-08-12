const mongoose= require('mongoose')


const notificationSchema= mongoose.Schema({

    notifications:{
        type:String,
        required:[true, 'name is required']
    }

   
}, {timeStamps:true})

module.exports =mongoose.model('notifications',notificationSchema)
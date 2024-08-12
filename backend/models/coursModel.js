const mongoose= require('mongoose')

const coursSchema= mongoose.Schema({

    name:{
        type:String,
        required:[true, 'name is required']
    },
    contenu:{
        type:String,
        required:[true, 'Contenu du cours is required']
    },
    link:{
        type:String,
        required:[true, 'le liens du cours']
    }
   
}, {timeStamps:true})

module.exports =mongoose.model('cours',coursSchema)
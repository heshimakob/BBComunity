const mongoose= require('mongoose')

const pubSchema= mongoose.Schema({

    titre:{
        type:String,
        required:[true, 'title is required']
    },
    contenu:{
        type:String,
        required:[true, 'contenu is required']
    },
    auteur:{
        type:String,
        required:[true, 'auteur is required']
    }
}, {timeStamps:true})

module.exports =mongoose.model('user',pubSchema)
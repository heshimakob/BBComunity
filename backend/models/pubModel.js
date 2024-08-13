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
    image:{
        type:String,
        required:true
    },
    auteur:{
        type:String,
        required:[true, 'auteur is required']
    }
}, {timeStamps:true})

module.exports =mongoose.model('pub',pubSchema)
const mongoose= require('mongoose')

const blogSchema= mongoose.Schema({

    titre:{
        type:String,
        required:[true, 'title is required']
    },
    description:{
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
    },
    category:{
        type:String,
        default: 'Uncotegosider'
    }
}, {timestamps:true})


module.exports =mongoose.model('Blog',blogSchema)
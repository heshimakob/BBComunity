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
    }
}, {timeStamps:true})



const blogModel = mongoose.model('blog',blogSchema);
module.exports =blogModel;
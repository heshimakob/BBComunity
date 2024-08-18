const mongoose= require('mongoose')

const companySchema= mongoose.Schema({

    name:{
        type:String,
        required:[true, 'name is required']
    },
    email:{
        type:String,
        required:[true, 'Contenu du cours is required']
    },
    adress:{
        type:String,
        required:[true, 'le liens du cours']
    },
    numero:{
        type:String,
        required:[true, 'le numero de telephone requis']
    }, 
    contenu:{

        type:String,
        required:[true, 'contenu de notification']
    }
   
}, {timestamps:true})




module.exports =mongoose.model('company',companySchema)
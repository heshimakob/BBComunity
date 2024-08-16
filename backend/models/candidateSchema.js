const mongoose= require('mongoose')

const candidateSchema= mongoose.Schema({

    name:{
        type:String,
        required:[true, 'name is required']
    },
    email:{
        type:String,
        required:[true, 'Contenu du cours is required']
    },
    pays:{
        type:String,
        required:[true, 'le pays est rquis']
    },
    numero:{
        type:String,
        required:[true, 'le numero de telephone requis']
    }
  
   
}, {timeStamps:true})



module.exports =mongoose.model('candidate',candidateSchema)
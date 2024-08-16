const mongoose= require('mongoose')

const userSchema= mongoose.Schema({

    name:{
        type:String,
        required:[true, 'name is required']
    },
    email:{
        type:String,
        required:[true, 'Email is required']
    },
    password:{
        type:String,
        required:[true, 'Email is required']
    },
    coho:{
        type:String,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
}, {timeStamps:true})




module.exports =mongoose.model('user',userSchema)
const mongoose= require('mongodb')

const userSchema= mongoose.Schema({

    name:{
        type:String,
        required:[true, 'name is required']
    },
    email:{
        type:String,
        required:[truex, 'Email is required']
    },
    cohorte:{
        type:String,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
}, {timeStamps:true})

module.exports =mongoose.model('user',userSchema)
const mongoose= require('mongoose')

const userSchema= mongoose.Schema({

    name:{
        type:String,
        required:[true, 'name is required']
    },
    email:{
        type:String,
        required:[true, 'Email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true, 'password is required']
    },
    role:{
        type:String,
        default:'user'
    },
    subscription:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Cours"
        }
    ]
}, {timestamps:true})




module.exports =mongoose.model('User',userSchema)
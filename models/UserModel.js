const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique: true
    },
    phone:{
        type: Number,
        required:[true,"Phone no of 10 digits"]
    },
    password:{
        type:String,
        required:[true,"Password required"]
    },
    address:{
        type:String,
        required:[true,"Address is required"]
    },
    room:[
        {name:{
            type:String
        }
    }
    ],
    admin:{
        type:Number,
        default:0
    }

})
const user=new mongoose.model("User",UserSchema)
module.exports={user}
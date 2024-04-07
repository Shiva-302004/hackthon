const mongoose=require('mongoose')
const AppointmentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true," Patient's Name is required"]
    },
    age:{
        type: Number,
        required:[true,"Age of patient is required"]
    },
    date:{
        type:Date,
        // required:true
    },
    reason:{
        type:String,
    },
    status:{
        type:String,
        enum:["pending","completed"],
        default:"pending"
    },
    userId:{
        type:mongoose.ObjectId,
        required:true,
       
    }

})
const appointment=new mongoose.model("Appoinment",AppointmentSchema)
module.exports={appointment}
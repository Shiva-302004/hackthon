const mongoose=require("mongoose")

const MedicineSchema=new mongoose.Schema({
   
    name:{    
        type: String,
        required:[true,"patient name is required"],
        unique:true
    },
    price:{
        type:Number,
        required:[true,"price is required"],
    },
})
const medicine=new mongoose.model("Medicine",MedicineSchema)
module.exports={medicine}
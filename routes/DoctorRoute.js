const express=require("express")
const doctorroute=express.Router();
const {DoctorController,getDoctor}=require("../controllers/DoctorController")

doctorroute.post("/createdoctor",DoctorController)
doctorroute.get("/getdoctor",getDoctor)

module.exports=doctorroute
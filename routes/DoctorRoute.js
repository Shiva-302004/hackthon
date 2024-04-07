const express=require("express")
const doctorroute=express.Router();
const {DoctorController,getDoctor,getsingledoctor,searchdoctorcontroller, addpaintient,getpatients}=require("../controllers/DoctorController");
const isLogin = require("../middleware/Authmiddleware");

doctorroute.post("/createdoctor",DoctorController)
doctorroute.get("/getdoctor",getDoctor)
doctorroute.get("/getonedoctor/:id",getsingledoctor)
doctorroute.get("/getonedoctors/:keywords",searchdoctorcontroller)
doctorroute.get("/getpatients/:id",getpatients)
doctorroute.post("/postpatient/:id",isLogin,addpaintient)
module.exports=doctorroute
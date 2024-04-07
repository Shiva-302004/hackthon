const express=require("express")
const doctorroute=express.Router();
const {DoctorController,getDoctor,getsingledoctor,searchdoctorcontroller, addstatus,addpaintient,getpatients}=require("../controllers/DoctorController");
const isLogin = require("../middleware/Authmiddleware");
const { doctor } = require("../models/DoctorModel");

doctorroute.post("/createdoctor",DoctorController)
doctorroute.get("/getdoctor",getDoctor)
doctorroute.get("/getonedoctor/:id",getsingledoctor)
doctorroute.get("/getonedoctors/:keywords",searchdoctorcontroller)
doctorroute.get("/getpatients/:id",getpatients)
doctorroute.post("/postpatient/:id",isLogin,addpaintient)
doctorroute.put("/status",isLogin,addstatus)
module.exports=doctorroute
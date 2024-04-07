const express=require("express")
const appointmentroute=express.Router();
const isLogin = require("../middleware/Authmiddleware");
const {postAppointment}=require("../controllers/Patient")
appointmentroute.post("/postappoinment/:id",isLogin,postAppointment)
module.exports=appointmentroute
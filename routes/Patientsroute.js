const express=require("express")
const appointmentroute=express.Router();
const {postAppointment}=require("../controllers/Patient")
appointmentroute.post("/postappoinment",postAppointment)
module.exports=appointmentroute
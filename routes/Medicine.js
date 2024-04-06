const express=require("express")
const medicineroute=express.Router();
const {MedicineController,getMedicine}=require("../controllers/MedicineController")

medicineroute.post("/createmedicine",MedicineController)
medicineroute.get("/getmedicine",getMedicine)

module.exports=medicineroute
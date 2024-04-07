const express=require("express")
const medicineroute=express.Router();
const {MedicineController,getMedicine,searchmedicinecontroller}=require("../controllers/MedicineController")

medicineroute.post("/createmedicine",MedicineController)
medicineroute.get("/getmedicine",getMedicine)
medicineroute.get("/getmedicines/:keywords",searchmedicinecontroller)
module.exports=medicineroute
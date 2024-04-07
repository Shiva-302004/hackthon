const { appointment } = require("../models/PatientModel")
const {doctor}=require("../models/DoctorModel")
const {user}=require("../models/UserModel")
const postAppointment = async (req, res) => {
    const {id }= req.params; 
    const { name, age, date, reason } = req.body
    if (!name) res.json({ message: "email field is required" })
    if (!age) res.json({ message: "password field is required" })
    if (!date) res.json({ message: "password field is required" })
    if (!reason) res.json({ message: "phone field is required" })
    const data=new appointment({
        name, age, date, reason
    })
    const newdata=await data.save()
    console.log(newdata)
    const use=await user.findOne({_id:req.user.id})
    console.log(use)
    const newdataa=await doctor.findByIdAndUpdate({_id:id},{$push:{"patientdetails":{patientname:use.username,age:23,reason}}},{new:true})
    console.log(newdataa)
    return res.status(200).json({
        success:true,
        data:newdata,
        newdata:newdataa
    })
}
module.exports={postAppointment}
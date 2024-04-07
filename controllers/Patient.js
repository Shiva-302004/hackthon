const { appointment } = require("../models/PatientModel")
const postAppointment = async (req, res) => {
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
    res.status(200).json({
        data:newdata,
        success:true
    })
}
module.exports={postAppointment}
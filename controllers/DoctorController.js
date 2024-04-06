const { doctor } = require("../models/DoctorModel")
const DoctorController = async (req, res) => {
    try {
        const { name, speciality, experiance, qualification, hospital, address, doctorid, phoneno } = req.body;
        if (!name) res.json({ message: "email field is required" })
        if (!speciality) res.json({ message: "password field is required" })
        if (!experiance) res.json({ message: "password field is required" })
        if (!qualification) res.json({ message: "phone field is required" })
        if (!hospital) res.json({ message: "address field is required" })
        if (!doctorid) res.json({ message: "address field is required" })
        if (!phoneno) res.json({ message: "address field is required" })

        const use = await doctor.findOne({ doctorid })
        if (use) {
            return res.status(400).json({
                msg: "this doctor is already present",
                success: false
            })
        } else {

            const newdata = new doctor({ name, speciality, experiance, qualification, hospital, address, doctorid, phoneno })
            const data = await newdata.save()

            return res.status(200).json({
                msg: "doctor created",
                data: data,
                success: true,

            })
        }
    }
    catch (err) {
    return res.status(404).json({
        msg: "something went wrong",
        err
    })
}
}
const getDoctor=async(req,res)=>{
    try{
        const data=await doctor.find({})
        res.status(200).json({
            success:true,
            data:data
        })
    }catch(err){
        console.log(err)
        res.status(400).json({msg:"error in fetcjing doctors"})
    }
}
module.exports = { DoctorController,getDoctor }
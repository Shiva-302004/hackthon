const { doctor } = require("../models/DoctorModel")
const {user}=require("../models/UserModel")
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
const getsingledoctor=async(req,res)=>{
    const {id}=req.params
    try{
        const data=await doctor.find({_id:id})
        res.status(200).json({
            success:true,
            data:data
        })
    }catch(err){
        console.log(err)
        res.status(400).json({msg:"error in fetcjing doctors"})
    }

}
const searchdoctorcontroller=async(req,res)=>{
    try{
        const keyword=req.params.keywords;
        const product=await doctor.find({$or:[
            {name:{$regex:keyword,$options:"i"}},
            {speciality:{$regex:keyword,$options:"i"}}
        ]})
        res.json({
            data:product
        })
    }catch(err){
        res.status(400).json(err)
    }
}
// const addpaintient=asnyc(req,res)=>{
//     const {id}=req.params
//     const {title}=req.body
//     if(!req.user.id) return res.status(400).json({msg:"please login to avail this facility"})
//     const use=await user.findOne({_id:req.user.id})
//     const data=await postmodel.findByIdAndUpdate({_id:id},{$push:{"comments":{title,userid:use.name}}},{new:true})
//     return res.status(200).json({
//         success:true,
//         data:data
//     })
// }
const addpaintient=async(req,res)=>{
    const {id}=req.params
    if(!req.user.id) return res.status(400).json({msg:"please login to avail this facility"})
    const use=await user.findOne({_id:req.user.id})
    const data=await doctor.findByIdAndUpdate({_id:id},{$push:{"patientdetails":{patientname:use.username}}},{new:true})
    return res.status(200).json({
        success:true,
        data:data
    })
}
module.exports = { DoctorController,getDoctor,getsingledoctor,searchdoctorcontroller ,addpaintient}
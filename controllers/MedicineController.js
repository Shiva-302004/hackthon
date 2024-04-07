const { medicine } = require("../models/MedineModel")
// const {,}=require("../controllers/DoctorController")
const MedicineController= async (req, res) => {
    try {
        const { name, price } = req.body;
        if (!name) res.json({ message: "medi field is required" })
        if (!price) res.json({ message: "price field is required" })
        const newdata = new medicine({ name, price})
        const data = await newdata.save()

        return res.status(200).json({
            msg: "doctor created",
            data: data,
            success: true,

        })
    }
    
    catch (err) {
    return res.status(404).json({
        msg: "something went wrong",
        err
    })
}
}
const getMedicine = async (req, res) => {
    try {
        const data = await medicine.find({})
        res.status(200).json({
            success: true,
            data: data
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({ msg: "error in fetcjing doctors" })
    }
}
const searchmedicinecontroller=async(req,res)=>{
    try{
        const keyword=req.params.keywords;
        const product=await medicine.find({$or:[
            {name:{$regex:keyword,$options:"i"}}
        ]})
        res.json({
            data:product
        })
    }catch(err){
        res.status(400).json(err)
    }
}
module.exports = { getMedicine, MedicineController,searchmedicinecontroller }
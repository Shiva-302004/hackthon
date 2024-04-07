const {user}=require("../models/UserModel")
const {hashpass}=require("../helper/AuthHelper")
const validator=require("validator")
const dotenv=require("dotenv")
const bcryptjs=require("bcryptjs")
dotenv.config()
const jwt=require("jsonwebtoken")

const logincontroller=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email) res.json({message:"email field is required"})
        if(!password) res.json({message:"password field is required"})
        const data=await user.findOne({email})
        if(!data){
            return res.status(400).json({
                msg:"user not exist",
                success:false
            })
        }else{
            const pass=await bcryptjs.compare(password,data.password)
            if(!pass){
                return res.status(400).json({
                    msg:"invalid username or password",
                    sucess:false
                })
            }else{
                const payload={
                    user:{
                        id:data._id
                    }
                }
                const token=await jwt.sign(payload,process.env.JWT_SECRET_KEY)
                return res.status(200).json({
                    msg:"login successfull",
                    sucess:true,
                    token:token,
                    data:data
                })
            }
        }
    }catch(err){
        res.status(404).json({
            msg:"something went wrong",
            err
        })
    }
}
const signupcontroller=async(req,res)=>{
    try{
        const {username,email,phone,password,address}=req.body;
        if(!email) res.json({message:"email field is required"})
        if(!password) res.json({message:"password field is required"})
        if(!username) res.json({message:"password field is required"})
        if(!phone) res.json({message:"phone field is required"})
        if(!address) res.json({message:"address field is required"})
        if(!validator.isEmail(email)){
           return  res.status(400).json({
                msg:"enter a valid email ",
                success:false
            })
        }else{
            const use=await user.findOne({email})
            if(use){
                return res.status(400).json({
                    msg:"email already exist",
                    success:false
                })
            }else{
                const pass=await hashpass(password)
                const newdata=new user({username,email,phone,password:pass,address})
                const  data=await newdata.save()
                const payload={
                    user:{
                        id:data._id
                    }
                }
                const token=await jwt.sign(payload,process.env.JWT_SECRET_KEY)
                return res.status(200).json({
                    msg:"signup successfull",
                    data:data,
                    success:true,
                    token:token
                })
            }
        }
    }catch(err){
        return res.status(404).json({
            msg:"something went wrong",
            err
        })
    }
}
const getsingleuser=async(req,res)=>{
    const {id}=req.user.id
    const data=await user.findOne({_id:id})
    res.status(200).json({data})
}
module.exports={logincontroller,signupcontroller,getsingleuser}
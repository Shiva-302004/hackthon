const express=require("express")
const authroute=express.Router();
const {logincontroller,signupcontroller,getsingleuser}=require("../controllers/AuthControllers");
const isLogin = require("../middleware/Authmiddleware");

authroute.post("/login",logincontroller)
authroute.post("/signup",signupcontroller)
authroute.get("/getuser",isLogin,getsingleuser)
module.exports=authroute
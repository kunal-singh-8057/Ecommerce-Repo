const UserModels = require("../Models/UserModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRETE = process.env.JWT_SECRETE;

const register = async(req,res)=>{
    
    const{name,email,password} = req.body;
    let user = await UserModels.findOne({email});

    if(user) return res.status(404).json({
        success:false,
        message:"User Alraedy exist"
    })

    const hashpassword = await bcrypt.hash(password,10);

   user =  await UserModels.create({name,email,password:hashpassword})

   res.status(201).json("success")
}


const login = async(req,res)=>{
    const{email,password} = req.body;

    let user = await UserModels.findOne({email})

    if(!user) return res.status(404).json("failed")

    user = await bcrypt.compare(password,user.password)

    const token = await jwt.sign({_id:user._id},JWT_SECRETE)

    res.status(201).cookie("token",token,{
        httpOnle:true,
        maxAge:150*60*1000
    }).json("success")
}



const viewusers = async(req,res)=>{
    const view = await UserModels.find()

    res.status(201).json({
        success:true,
        view
    })
}


const verify = async(req,res)=>{
    res.status(201).json("success")
}


module.exports = {register,login,viewusers,verify}
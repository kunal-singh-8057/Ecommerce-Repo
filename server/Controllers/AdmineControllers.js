const AdmineModels = require("../Models/AdmineModels");

const addAdmine = async(req,res)=>{
   const add = await AdmineModels.create(req.body);

   res.status(201).json({
    success:true,
    add
   })
}

const loginAdmine = async(req,res)=>{
    const{email,password} = req.body;

    if(email==="ks9836185@gmail.com"&&password==="1234567890")
    {
        res.status(201).json({
            success:true,
            message:"Wecome admine"
        })
    }
}

module.exports = {loginAdmine,addAdmine}
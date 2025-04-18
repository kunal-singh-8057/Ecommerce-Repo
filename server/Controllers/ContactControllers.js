const contactmodels = require("../Models/Contactusmodels");

const addcontact = async(req,res)=>{
    
    await contactmodels.create(req.body)
    res.status(201).json("success")
}

const viewcontact = async(req,res)=>{
    await contactmodels.find()
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}


module.exports = {addcontact,viewcontact}


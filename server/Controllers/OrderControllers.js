const orderModles = require("../Models/OrderModels");

const addorders = async(req,res)=>{

    const order = await orderModles.create(req.body)
    res.status(201).json({
        success:true,
        order
    })
}


const vieworders = async(req,res)=>{

    const view = await orderModles.find();

    res.status(201).json({
        success:true,
        view
    })
}


module.exports = {addorders,vieworders}


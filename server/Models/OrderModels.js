const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },

    pid:{
        type:String,
        required:true
    },

    pname:{
        type:String,
        required:true
    },

    pprice:{
        type:String,
        required:true
    }
});


const orderModels = mongoose.model("orderdata",orderSchema);

module.exports  = orderModels;
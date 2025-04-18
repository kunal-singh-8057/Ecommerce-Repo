const mongoose = require("mongoose");

const contactschema = mongoose.Schema({
    
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

    message:{
        type:String,
        required:true
    },


})

const contactmodels =  mongoose.model("contactdata",contactschema)
module.exports = contactmodels;
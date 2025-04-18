const mongoose = require("mongoose");

const AdmineSchema = mongoose.Schema({
    
    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },
});

const AdmineModels = mongoose.model("adminedata",AdmineSchema);
module.exports = AdmineModels;
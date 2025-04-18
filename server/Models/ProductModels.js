const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    categories:{
        type:Array,
        required:true
    },


    price:{
        type:String,
        required:true
    },


    image:{
        type:String,
        required:true
    },


    stock:{
        type:String,
        required:true
    },
});

const ProductModels = mongoose.model("productdata",ProductSchema);
module.exports = ProductModels;
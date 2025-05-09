const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({

    razorpay_order_id:{
        type:String,
        required:true
    },

    razorpay_payment_id:{
        type:String,
        required:true
    },


    razorpay_signature:{
        type:String,
        required:true
    },
});


const paymentModels = mongoose.model("paymentdata",paymentSchema);
module.exports = paymentModels;
const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:true,

    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"customer",
    
    },
    mobile:{
        type:String,

    },
    address:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"addresses"
    }],
    paymentInformation:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "paymnent_information"
    },
    ratings:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "ratings"
        }
    ],
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"reviews"
        }
    ],
    createdAt:{
        type:Date,
        default: Date.now()
    }

    
    
})
const User = mongoose.model("users", userSchema)
module.export = User;
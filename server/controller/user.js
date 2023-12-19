const express = require("express");
const User = require("../model/user");
const router = express.Router();
const {upload} = require("../multer")
const ErrorHandler = require("../utils/ErrorHandler");


router.post('/create-user', upload.single('file'), async(req, res)=>{
    const {name, email, password} = req.body;
    const userEmail = await User.findOne({email})


    if(userEmail){
        return next(new ErrorHandler("User already Exists", 400));
    }
    const filename = req.file.filename;
    const fileUrl = path.join(filename);

    
        const user = await User.create({
        name,
            email,
            password,
            avatar:{
                public_id: result.public_id,
                url: result.secure_url
            }
        })
        res.status(200).json({
            success: true,
            user
        })
    })



module.exports = router
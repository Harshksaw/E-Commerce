const bcrypt = require("bcrypt")
const User = require("../models/user.model")
const jwt = require("jsonwebtoken");

const jwtProvider = require("../config/jwtProvider")

const createUser = async (userData) => {
    try {
        let { firstName, lastName, email, password } = userData;
        const isUserExist = await User.findOne({ email })



        if (isUserExist) {
            throw new Error("user already exist with email: ", email)
        }
        // hash the password

        password = await bcrypt(password, 8)

        const user = await User.create({ firstName, lastName, email, password });
        console.log("Created USer", user)
        return user;


    } catch (err) {
        console.error(err.message);
    }
}

const findUserById = async (userId) => {

    try {

        const user = await User.findById(userId);

        if (!user) {
            throw new Error("User not found with Id :", userId);
        }

        return user;

    }
    catch (err) {
        throw new Error(error.message)
    }

}
const getUserByEmail = async (userEmail) => {

    try {

        const userEmail = await User.findOne(userEmail).populate("address");

        if (!userEmail) {
            throw new Error("User not found with Id :", userEmail);
        }

        return user;

    }
    catch (err) {
        throw new Error(error.message)
    }

}

const getUserProfileByToken = async(token) => {






    try {

        const userId = jwtProvider.getUserProfileByToken(token)

        const user = await findUserById(userId);
        if(!user){
             throw new Error("User not found with id ", userId)
        }



    }
    catch (err) {

        console.log("getProfileByUserToken", err)
    }
}


const getAllUsers = async()=>{
    try{
        const users = await User.find();

        return users
    }
    catch(err){
        throw new Error(error.message);
    }
}




module.exports = { createUser, getUserByEmail, findUserById , getAllUsers, getUserProfileByToken}

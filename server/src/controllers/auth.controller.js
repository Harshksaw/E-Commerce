const userService=require("../services/user.service.js")
const jwtProvider=require("../config/jwtProvider.js")
const bcrypt=require("bcrypt")
const cartService=require("../services/cart.service.js")


const register = async (req, res) => {
    try {
        console.log("Before creating user:", req.body);

        const user = await userService.createUser(req.body);

        console.log("User created:", user);

        const jwt = jwtProvider.generateToken(user._id);

        console.log("JWT generated:", jwt);

        await cartService.createCart(user);

        console.log("Cart created");

        return res.status(200).send({ jwt, message: "register success" });
    } catch (error) {
        console.error("Error in register function:", error);

        return res.status(500).send({ error: "inauthcontroller" });
    }
};

const login=async(req,res)=>{
    const {password,email}=req.body
    try {
        const user = await userService.getUserByEmail(email);

        if (!user) {
            return res.status(404).json({ message: 'User not found With Email ', email});
        }

        const isPasswordValid=await bcrypt.compare(password,user.password)

        if(!isPasswordValid){
            return res.status(401).json({ message: 'Invalid password' });
        }

        const jwt=jwtProvider.generateToken(user._id);

        return res.status(200).send({jwt,message:"login success"});

    } catch (error) {
        console.log("Secret key:", yourSecretKeyVariable);
        return res.status(500).send({error:"inauthcontroller"})
    }
}
module.exports={register,login}
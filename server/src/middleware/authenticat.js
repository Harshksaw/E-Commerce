const jwtProvider=require("../config/jwtProvider")
const userService=require("../services/user.service")


const authenticate = async(req,res,next)=>{

    try {
        const token=req.headers.authorization?.split(" ")[1]
        if(!token){
            return req.status(404).send({message:"token not found"})
        }

        const userId=jwtProvider.getUserIdFromToken(token);
        const user=await userService.findUserById(userId);

        req.user=user;
    } catch (error) {
        return res.status(500).send({error:"inautheticte"})
    }
    next();
}

module.exports=authenticate;
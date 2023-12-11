require('dotenv').config();
const jwt = require('jsonwebtoken');
const SECRET_KEY=process.env.SECRET_KEY 


const generateToken=(userId)=>{

    const token=jwt.sign({userId},SECRET_KEY,{ expiresIn: '48h' })
    // Example: In jwtProvider or similar module


// Continue with JWT operations

    return token;
}

const getUserIdFromToken=(token)=>{
    const decodedToken=jwt.verify(token,SECRET_KEY )
    return decodedToken.userId
}


module.exports={generateToken,getUserIdFromToken};
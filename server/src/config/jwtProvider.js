const jwt=  require("jsonwebtoken")

require('dotenv').config();


const generateToken = (userId)=>{
    const SECRET_KEY = process.env.SECRET_KEY
    
    const token = jwt.sign({userId}, SECRET_KEY , {expiresIn: "48h"})
    return token
}

const getUserIdFromToken = (token)=>{
    const SECRET_KEY = process.env.SECRET_KEY
    const decodedToken = jwt.verify(token, SECRET_KEY)
    return decodedToken.userId;

}


module.exports = {generateToken , getUserIdFromToken}
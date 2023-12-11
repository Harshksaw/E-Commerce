const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://misterharshkumar:programmer@cluster0.oiz6xug.mongodb.net/?retryWrites=true&w=majority'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}


const app = require(".")
const connectDB = require("../config/db")


const PORT = 5180


app.listen(PORT , async()=>{
    await connectDB()
    console.log("Ecommerce listening on this port: ", PORT)
})
const { app } = require(".");
const { connectDb } = require("./config/db");

const PORT=5180;
app.listen(PORT,async ()=>{
    await connectDb()
    console.log("ecommerce api listing on port ",PORT)
})
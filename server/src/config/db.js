

// const mongoose = require('mongoose');
// require('dotenv').config();

// const connectDB = async () => {
//   try {
//     const mongoURI = process.env.MONGODB_URI;
//     return mongoose.connect(mongoURI);
//     console.log('Connected to MongoDB');

//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
//     process.exit(1); // Exit with failure
//   }
// };

// module.exports = connectDB;
// db.js
const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://misterharshkumar:programmer@cluster0.oiz6xug.mongodb.net/?retryWrites=true&w=majority";

async function connectDB() {
    try {
        await mongoose.connect(MONGODB_URI, {
          
        });
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database', error);
        throw error; // Ensure that the error is propagated
    }
}

module.exports = connectDB;

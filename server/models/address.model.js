
const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    streetAddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    user:{
        type:moongoose.Schema.ObjectId,
        ref: "users"
    },
    mobile: {
        type: String,
        required: true
    }
    
});

const Address = mongoose.model('addresses', addressSchema);

module.exports = Address;

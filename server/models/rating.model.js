
const mongoose = require('mongoose');


const ratingSchema = new Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
        required: True,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'products',
        requried: True,

    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },

})
const Rating = mongoose.model('ratings', ratingSchema);
module.exports = Rating
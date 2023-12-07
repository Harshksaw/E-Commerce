const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true, // Corrected to lowercase 'true'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true, // Corrected to lowercase 'true'
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const Rating = mongoose.model('ratings', ratingSchema);
module.exports = Rating;

const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
    review: {
        type: String,
        required: true, // Corrected to lowercase 'true'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true, // Corrected to lowercase 'true'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const Review = mongoose.model('reviews', reviewSchema);
module.exports = Review;

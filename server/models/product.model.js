
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        // required: true
    },
    discountedPrice: {
        type: Number,
        // required: true,
    },
    discountPercent: {
        type: Number,
        // required: true
    },
    quantity: {
        type: Number,
        // required: true
    },
    brand: {
        type: String,
        // required: true
    },
    color: {
        type: String,
        // required: true
    },
    sizes: [{
        type: [type: String],
        quantity: { type: Number }
    }],
    imageUrl: {
        type: String,

    },
    ratings: {

        type: mongoose.Schema.Types.ObjectId,
        ref: 'ratings',
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'reviews',
        },],

    numRatings: {
        type: Number,
        d
    },
    category: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

const mongoose = require('moongoose');
const {Schema} = mongoose;




const reviewSchema = new Schema({

    review: {
        type: String,

        required: True,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'products',
        requried: true,

    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    }
    createdAt: {
        type: Date,
        default: Date.now(),
    },

})
const Review = mongoose.model('reviews', reviewSchema);
module.exports = Review
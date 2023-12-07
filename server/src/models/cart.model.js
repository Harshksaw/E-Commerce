
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    cartItems: [{

            type: mongoose.Schema.Types.ObjectId,
            ref: 'cartItem',
            required: true

    }],
    totalPrice: {
        type: Number,
        default: 0,
        required:true
    },
    totalItem:{
        type:Number,
        default:0,
        required:true
    },
    totalDiscountedPrice:{
        type:Number,
        default:0,
        required:true
    },
    discount: {
        type: Number,
        default: 0,
        required:true
    },
    
    
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;

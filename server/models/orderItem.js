
const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderItemSchema = new Schema({
    product: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discountedPrice: {
        type: Number,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "users",
    },
  
});

const OrderItem = mongoose.model('orderItems', orderItemSchema);
module.export = OrderItem;

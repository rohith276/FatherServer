const mongoose = require('mongoose');
const {Schema} = mongoose;

const refundSchema = new Schema({
    transactionId: String,
    email: String,
    price: Number,
    quantity: Number,
    status: String,
    itemName:Array,
    cartItems: Array,
    menuItems: Array,
}, { timestamps: true })

// create model
const Refund  = mongoose.model('Refund', refundSchema);
module.exports = Refund;
const mongoose = require('mongoose');
const {Schema} = mongoose;

const paymentSchema = new Schema({
    transactionId: String,
    email: String,
    price: Number,
    quantity: Number,
    status: String,
    itemName:Array,
    cartItems: Array,
    menuItems: Array,
    createAt: {
        type: Date,
        default:Date.now
    }
})

// create model
const Payment  = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
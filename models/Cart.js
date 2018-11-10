const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    product: { type: String, required: true, index: { unique: true } },
    price: { type: String, required: true },
    amount: { type: String, required: true }
})

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;

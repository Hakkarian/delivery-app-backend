const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true,
  },
});

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;

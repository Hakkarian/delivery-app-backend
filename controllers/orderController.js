const Order = require("../models/Order");
const catchAsync = require("../utils/catchAsync");

const addOrder = catchAsync(async (req, res, next) => {
    const { name, email, phone, address, items, totalPrice } = req.body;
    const newOrder = await Order.create({ name, email, phone, address, items, totalPrice });
    res.json(newOrder);
});

const findOrder = catchAsync(async (req, res, next) => {
    const { email, phone } = req.body;
    // const { orderId } = req.params;
    const orders = await Order.find({ email, phone });
    res.json(orders);
})

module.exports = { addOrder, findOrder };

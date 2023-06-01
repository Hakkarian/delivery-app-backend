const Order = require("../models/Order");
const catchAsync = require("../utils/catchAsync");

const addOrder = catchAsync(async (req, res, next) => {
    const { name, email, phone, address, items, totalPrice } = req.body;
    const newOrder = await Order.create({ name, email, phone, address, items, totalPrice });
    res.json(newOrder);
});

module.exports = { addOrder };

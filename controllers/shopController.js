const catchAsync = require("../utils/catchAsync");
const Shop = require('../models/Shop');
const Product = require("../models/Product");

const getAllShops = catchAsync(async (req, res, next) => {
    const shops = await Shop.find();
    res.json(shops);
})

const getShopById = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const shop = await Shop.findById(id);
    if (!shop) {
        return res.status(404).json({ error: 'Shop not found' });
    }
    res.json(shop);
})

const findProductByShopId = catchAsync(async (req, res, next) => {
  const { shopId } = req.params;
  const products = await Product.find({ shopId });
  res.json(products);
});

module.exports = {getAllShops, getShopById, findProductByShopId}
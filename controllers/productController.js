const catchAsync = require("../utils/catchAsync");
const Product = require('../models/Product');

const getAllProducts = catchAsync(async (req, res, next) => {
    const products = await Product.find();
    res.json(products)
});

const getProductByShopId = catchAsync(async (req, res, next) => {
  const { shopId } = req.params;
  const product = await Product.find({shopId});

  res.json(product);
});


module.exports = {getAllProducts, getProductByShopId}
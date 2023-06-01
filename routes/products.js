const express = require("express");
const ctrl = require("../controllers/productController");
const router = express.Router();

router.get('/', ctrl.getAllProducts)

router.get("/:shopId", ctrl.getProductByShopId);

module.exports = router;

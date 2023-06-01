const express = require("express");
const ctrlOrder = require("../controllers/orderController");
const router = express.Router();

router.post("/", ctrlOrder.addOrder);

module.exports = router;

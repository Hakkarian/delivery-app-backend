const express = require("express");
const ctrlOrder = require("../controllers/orderController");
const router = express.Router();

router.post("/", ctrlOrder.addOrder);
router.post("/history", ctrlOrder.findOrder);

module.exports = router;

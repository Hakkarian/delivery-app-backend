const express = require('express');
const ctrl = require('../controllers/shopController');
const router = express.Router();

router.get('/', ctrl.getAllShops);

router.get('/:id', ctrl.getShopById)

module.exports = router;
var express = require('express');

var controller = require('../controller/cart.controller');

var router = express.Router();

router.get('/add/:productId', controller.addToCart);

module.exports = router;

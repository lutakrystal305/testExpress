var express= require('express');
var router= express.Router();
var controller= require('../controller/product.controller');

router.get('/', controller.index);


module.exports = router;




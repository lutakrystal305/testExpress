var express= require('express');

var controller= require('../controller/product.controller');
var router= express.Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.delete('/:id', controller.delete);


module.exports = router;




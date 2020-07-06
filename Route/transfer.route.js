var express= require('express');
var router= express.Router();
var controller= require('../controller/transfer.controller');

router.get('/create', controller.create);
router.post('/create', controller.postCreate);


module.exports = router;

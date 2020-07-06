var express= require('express');
var router= express.Router();
var multer  = require('multer');
var controller= require('../controller/users.controller');
var validate= require('../validate/users.validate');

var upload = multer({ dest: './public/uploads/' });


router.get('/', controller.index);
router.get('/cookie', function(req, res, next){
	res.cookie('user-id', 305);
	res.send('I love H');
});
router.get('/search', controller.search);
router.get('/create', controller.create);
router.post('/create', 
	upload.single('avatar'),
 	validate.postCreate,
 	controller.postCreate);
router.get('/:id', controller.view);

module.exports = router;
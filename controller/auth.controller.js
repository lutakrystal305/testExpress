var md5 = require('md5');

var User= require('../models/user.model');



module.exports.login= function (req, res) {
	res.render('auth/login');
}
module.exports.postLogin= async function(req, res, next) {
	var email = req.body.email;
	var password = req.body.password;

	var user = await User.findOne({ email: email });
	if (!user) {
		res.render('auth/login', {
			errors: [
			'User does not exist!'
			], 	
			values: req.body
		});
		return;
	}
	var hashedPassword= md5(password);
	if (user.password !== hashedPassword) {
		res.render('auth/login', {
			errors: [
			'Password is wrong, you can try again!'
			],
			values: req.body 
		});
		return;
	}
	res.cookie('userID', user._id, {
		signed: true
	});
	res.redirect('/users');
};
postLogin().catch(function(error) {
	console.error(error);
})
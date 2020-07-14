var User = require('../models/user.model');

var users = User.find();

module.exports.requireAuth= function(req, res, next) {
	if (!req.signedCookies.userID) {
		res.redirect('/auth/login');
		return;
	}
	var user= User.findOne({
		_id: req.signedCookies.userID
	});
	if (!user) {
		res.redirect('/auth/login');
		return;
	}

	res.locals.user= user;

	next();
}
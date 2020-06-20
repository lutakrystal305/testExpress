var db= require('../db');

module.exports.requireAuth= function(req, res, next) {
	if (!req.signedCookies.userID) {
		res.redirect('/auth/login');
		return;
	}
	var user= db.get('users').find({
		id: req.signedCookies.userID
	}).value();
	if (!user) {
		res.redirect('/auth/login');
		return;
	}

	res.locals.user= user;

	next();
}
var User= require('../models/user.model');


module.exports.index = async function(req, res, next) {
	try {
		var users=await User.find();
		res.render('users/index', {
		users: users
		});
	} catch(error) {
		next(error);
	}
}
module.exports.search = async function(req, res, next){
	try {
		var q=req.query.q;
		var matchedUsers =await User.find().filter(function(user){
			return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
		});
		res.render('users/index', {
			users: matchedUsers
		})
	} catch(error) {
		next(error);
	}
}
module.exports.create = function(req, res){
	console.log(req.cookies);
	res.render('users/create');

};
module.exports.postCreate =async function(req, res, next){
	try {
		req.body.avatar = req.file.path.split('\\').slice(1).join('/');
		var user=await new User(req.body);
		user.save();
		res.redirect('/users');
	} catch (error) {
		next(error);
	}
}
module.exports.view = async function(req, res, next) {
	try {
		var id= req.params.id;
		user= await User.findOne({_id: id});
		res.render('users/view', {
			user: user
		});
	} catch(error) {
		next(error);
	}
};
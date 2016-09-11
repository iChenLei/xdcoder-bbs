var models = require('../models');
var User = models.User;

exports.new = function (name,pass,email,callback) {
	var user = new User();
	user.name = name;
	user.pass = pass;
	user.email = email;

	user.save(callback);
};
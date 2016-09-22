var models = require('../models');
var User = models.User;

exports.saveNewUser = function (name,password,email,callback) {
	var user = new User();
	user.name = name;
	user.password = password;
	user.email = email;
	user.avatar = name.charAt(0);

	user.save(callback);
};

exports.queryUserByEmail = function(email,callback){
	User.findOne({email:email},callback);
};

exports.queryUserById = function(id,callback){
	User.findOne({_id:id},callback);
};

/* more proxy function */



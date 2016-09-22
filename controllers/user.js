var User = require('../proxy/user');


exports.save = function (req,res){
	var name = req.body.name;	
	var password = req.body.password;
	var email = req.body.email;	

	User.queryUserByEmail(email,function(err,user){
		if(err) return next(err);
		if(user){
			res.send('This email is invalid!');return;
		}
	});

	User.saveNewUser(name,password,email,function(err,next){
		if(err) return next(err);
	});	
};

exports.login = function(req,res){

};
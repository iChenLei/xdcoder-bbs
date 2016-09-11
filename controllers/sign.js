
exports.signin = function(req,res){
	res.render('sign/signin');
};

exports.login = function(req,res){
	var user = {
		name: req.body.name,
		pass: req.body.pass,
		email: req.body.email
	};

	console.log(user.name+'....'+user.pass+'....'+user.email);
};
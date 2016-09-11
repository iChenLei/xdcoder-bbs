var User = require('../proxy/user');

exports.save = function(req,res,next){
	var name = req.body.name;
	var pass = req.body.pass;
	var email = req.body.email;
	User.new(name,pass,email,function(err){
		if(err){
			console.log('Fail to save user info...');
			res.send('Fail to save user info...')
			return next(err);
		}
		console.log('Saving user info successful!');

	});
	
	res.redirect('/signin');
};
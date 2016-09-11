var Post = require('../proxy/post');

exports.save = function(req,res,next) {

	var title = req.body.title;
	var content = req.body.content;

	console.log(content);
	console.log(typeof(Post));

	try{

	Post.new(title,content,function(err){
		if(err){
			console.log('open mongodb error...')
		}

		console.log('Saving post info success...');
	   });
	}catch(e){
		console.log(e);
	}finally{
		res.redirect('/post');
	}

	
};

exports.show = function (req,res){
	res.render('post/posting');
};
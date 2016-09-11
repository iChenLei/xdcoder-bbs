var express = require('express');
var router = express.Router();
var sign = require('./controllers/sign');
var user = require('./controllers/user');
var post = require('./controllers/post');


router.get('/',function(req,res){
	res.render('nav');

});

router.get('/cookie',function(req,res){
		res.clearCookie('name',{path:'/'});
		res.send('.........');
});


router.get('/chen',function(req,res){
	res.send('My name is chen');
});

router.get('/signin',sign.signin);
router.post('/signin',user.save);

router.get('/post',post.show);
router.post('/post',post.save);


module.exports = router;
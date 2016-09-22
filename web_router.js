var express = require('express');
var router = express.Router();
var topic = require('./controllers/topic');
var user = require('./controllers/user');


router.get('/',function (req,res){
	res.render('sign');
});

module.exports = router;
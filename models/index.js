var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/xdcoder');
// url:'mongodb://localhost/xdcoder'

require('./user');
require('./post');

exports.User = mongoose.model('User');	
exports.Post = mongoose.model('Post');
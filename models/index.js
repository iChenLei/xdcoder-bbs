var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/xdcoder');
// url:'mongodb://localhost/xdcoder'

require('./user');
require('./topic');
require('./reply');

exports.User = mongoose.model('User');	
exports.Topic = mongoose.model('Topic');
exports.Reply = mongoose.model('Reply');
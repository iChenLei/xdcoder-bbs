var models = require('../models');
var Post = models.Post;

exports.new = function (title,content,callback) {
	var post = new Post();
	post.title = title;
	post.content = content;

	post.save(callback);
};

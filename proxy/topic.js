var models = require('../models');
var Topic = models.Topic;

exports.saveNewTopic = function(title,content,author_id,callback){
	var topic = new Topic();
	topic.title = title;
	topic.content = content;
	topic.author_id = author_id;
	topic.save(callback);
};

exports.queryTopicById = function(id,callback){
	Topic.findOne({_id:id},callback);
};

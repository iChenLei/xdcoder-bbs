var models = require('../models');
var Reply = models.Reply;


exports.saveNewReply = function(content,reply_id,topic_id,callback){
	var reply = new Reply();
	reply.content = content;
	reply.reply_id = reply_id;
	reply.topic_id = topic_id;
	reply.save(callback);
};


exports.queryReplyByTopicId = function(topic_id,callback){
	Reply.find({topic_id: topic_id},'',{sort:'create_at'},callback);
};

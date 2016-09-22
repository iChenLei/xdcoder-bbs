var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var ReplySchema = new Schema({
	content:{type:String},
	topic_id:{type:ObjectId},
	reply_id:{type:ObjectId},
	create_at:{type:Date,default:Date.now()},
	deleted:{type:Boolean,default:false}
});

mongoose.model('Reply',ReplySchema);

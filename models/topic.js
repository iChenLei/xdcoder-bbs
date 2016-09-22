var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var TopicSchema = new Schema({
	title:{type:String},
	content:{type:String},
	lock:{type:Boolean,default:false},
	top:{type:Boolean,default:false},
	star:{type:Boolean,default:false},
	deleted:{type:Boolean,default:false},
	author_id:{type:ObjectId},
	create_at:{type:Date,default:Date.now()},
	update_at:{type:Date,default:Date.now()},
	reply_count:{type:Number,default:0},
	last_reply_id:{type:ObjectId},
	last_reply_at:{type:Date},

});

mongoose.model('Topic',TopicSchema);
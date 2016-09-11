var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var PostSchema = new Schema({
	title:{type:String},
	content:{type:String},
	author_id:{type:ObjectId,default:null},
	create_at:{type:Date,default:Date.now()}
});

mongoose.model('Post',PostSchema);
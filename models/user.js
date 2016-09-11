var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
	name:{type: String},
	pass:{type: String},
	email:{type: String},
	zhihu:{type: String,default:'www.zhihu.com'},
	isVip:{type: Boolean,default: false},
	creat_at:{type: Date,default:Date.now}
});

UserSchema.index({email:1},{unique: true});

mongoose.model('User',UserSchema);
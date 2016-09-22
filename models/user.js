var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
	name:{type:String},
	password:{type:String},
	email:{type:String},
	avatar:{type:String},
	signature:{type:String},
	create_at:{type:Date,default:Date.now()},
	last_login_at:{type:Date,default:Date.now()}
});

UserSchema.index({email:1},{unique: true});

mongoose.model('User',UserSchema);
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = ()=>{
	return new User({}).save();
}
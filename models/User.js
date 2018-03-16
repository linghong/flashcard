const mongoose =require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
	googleId: String,
	credits: {type: Number, default: 1000}
});

//load Schema into mongoose
mongoose.model('users', userSchema);
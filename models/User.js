const mongoose =require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
	googleId: String
});

//load Schema into mongoose
mongoose.model('users', userSchema);
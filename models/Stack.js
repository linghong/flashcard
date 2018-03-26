const mongoose = require('mongoose');
const { Schema } = mongoose;
const CardSchema = require('./Card');

const stackSchema = new Schema({
	title: String,
	cards: [CardSchema],
	_user: { type: Schema.Types.ObjectId, ref: 'User'},
	generated: Date
});

mongoose.model('stack', stackSchema);
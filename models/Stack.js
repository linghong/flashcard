const mongoose = require('mongoose');
const { Schema } = mongoose;
import CardSchema = require('./Card');

const stackSchema = new Schema({
	title: string,
	cards: [CardSchema],
	_user: { type: Schema.Type.ObjectId, ref: 'User'},
	generated: Date
});

mongoose.model('stack', stackSchema);
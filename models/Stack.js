const mongoose = require('mongoose');
const { Schema } = mongoose;
import CardSchema = require('./Card');

const stackSchema = new Schema({
	title: string,
	cards: [CardSchema]
});

mongoose.model('stack', stackSchema);
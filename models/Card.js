const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardSchema = new Schema({
	prompt: String,
	answer: String
});

module.exports = cardSchema;
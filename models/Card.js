const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardSchema = new Schema({
	prompt: string,
	answer: string
});

module.exports = cardSchema;
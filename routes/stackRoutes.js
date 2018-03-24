const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Stack = mongoose.model('stacks');

module.exports = app =>{
	app.post('/api/stacks', requireLogin, requireCredits, (req, res) =>{
		const { title, cards }  = req.body;

		const stack = new Stack({
			title,
			cards: cards.split(',').map((prompt, answer) =>{ prompt, answer }),
			_user: req.user.id,
			generated: Date.now()
		});
	});
};
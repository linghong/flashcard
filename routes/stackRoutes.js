const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Stack = mongoose.model('stack');

module.exports = app =>{
	app.get('/api/stack', requireLogin, async (req,res)=>{
		const stack = await Stack.find({_user: req.user.id});
		res.send(stack);
	});

	app.post('/api/stack', requireLogin, requireCredits, async (req, res) =>{
		const { title, cards }  = req.body;
		const stack = new Stack({
			title,
			cards: cards.map(card => { return { 
				prompt: card.prompt.trim(), 
				answer: card.answer.trim() 
			}}),
			_user: req.user.id,
			generated: Date.now()
		});

		try{
			await stack.save();
			req.user.credits -=1;
			const user = await req.user.save();

			res.send(user);
		} catch (err){
			res.status(422).send(err);
		}
		
	});

	app.get('/api/stack/current_user', (req, res) => {
    res.send(req.user);
  });
};
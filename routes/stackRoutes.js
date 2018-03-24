const requireLogin = require('../middleware/requireLogin');

module.exports = app =>{
	app.post('/api/stacks', requireLogin, (req, res) =>{
		
	});
};
const passport = require('passport');

module.exports =(app)=>{
	app.get('/auth/google', 
		passport.authenticate('google', {
		scope: ['profile', 'email']
	}));

	app.get('/auth/google/callback', passport.authenticate('google'));

	//loggin
	app.get('/api/current_user', (req, res)=>{
		res.send(req.user);
	});

	//log out
	app.get('api/logout', (req, res)=>{
		//a function attached by passport
		req.logout();
		res.send(req.user);
	});
};


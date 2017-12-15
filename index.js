const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport =require('passport');

const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, {useMongoClient: true});

const app = express();

//express middleware
app.use(
	//generate cookie session, 
	// i.e., cookie session extracts cookie data, set it on the req.session,
	//which is the user id from the databse
	cookieSession({
		maxAge:1*24*60*60*1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
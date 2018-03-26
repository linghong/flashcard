const express = require('express'); //common.js only support require not import syntax 
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport =require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

require('./models/User');
require('./models/Stack');
require('./services/passport');

mongoose.connect(keys.mongoURI, {useMongoClient: true});

const app = express();
app.use(bodyParser.json());
//express middleware
app.use(
	//generate cookie session, 
	// i.e., cookie session extracts cookie data, set it on the req.session,
	//which is the user id from the databse
	cookieSession({
		maxAge:4*60*60*1000, //miniseconds
		keys: [keys.cookieKey] //for encrypt cookie
	})
);
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/stackRoutes')(app);

//make express handle production correctly
if(process.env.NODE_ENV === 'production'){
	app.use(express.static('client/build'));

	const path = require('path');
	app.get('*', (req,res)=>{
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
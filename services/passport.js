
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose =require('mongoose');
const keys = require('../config/keys');

//fetch users from mongoose model
const User = mongoose.model('users');

passport.use(
	new GoogleStrategy({
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL: '/auth/google/callback',
		proxy: true
	}, (accessToken, refreshToken, profile, done)=>{
		User.findOne({googleId: profile.id})
		.then((existingUser)=>{
			if(!existingUser){
				new User({googleId: profile.id})
					.save()
					.then(user=>done(null, user));
			} else{
				done(null, existingUser);
			}
			
		});
	}	
));

//serialze user so that passport can generate cookies 
//the user.id is the id moongo generated
passport.serializeUser((user, done)=>{
	done(null, user.id);
});
//get whatever from cookie to find the user
passport.deserializeUser((id, done)=>{
	User.findById(id).then(user=>{
		done(null, user);
	});
});		
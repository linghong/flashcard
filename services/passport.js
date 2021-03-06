
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose =require('mongoose');
const keys = require('../config/keys');

//fetch users from mongoose model
const User = mongoose.model('users');

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

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleId: profile.id });
	    if (existingUser) {
	        return done(null, existingUser);
	    }
	    const user = await new User({ googleId: profile.id }).save();
	    done(null, user);
    }
  )
);

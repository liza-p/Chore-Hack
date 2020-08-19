// this file configures passport

// require dependencies
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

// use local strategy for logging in directly through our app
passport.use(new LocalStrategy(
  // log in with email
  {
    usernameField: "email"
  },
  // define what happens when a user attempts to sign in
  (email, password, done) => {
    // search database for email
    db.User.findOne({
      where: { email: email }
    }).then(userMatch => {
      // if not found, return no user data
      if (!userMatch) { 
        console.log("incorrect email");
        return done(null, false, { message: 'Incorrect email.' }); 
      }
      // if found, check password
      if (!userMatch.verifyPassword(password)) { 
        // if incorrect, return no user data
        console.log("incorrect password");
        return done(null, false, { message: 'Incorrect password.' }); 
      }
      // if correct, return data for the user
      console.log("correct email and password");
      return done (null, userMatch);
    }).catch(err => {
      return done(err);
    });
  }
));

// serialize and deserialize the user (i.e. store their data in a cookie when they're logged in)
passport.serializeUser(function(user, done) {
  done(null, user.id); 
  // Currently just storing id's in the cookie. Is it bad because our id's are predictable?
});

passport.deserializeUser(function(id, done) {
  db.User.findOne({
    where: { id: id }
  }).then(user => {
    done(null, user);
  }).catch(err => done(err));
});

// export the configuration
module.exports = passport;
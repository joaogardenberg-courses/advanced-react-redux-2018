const passport      = require('passport');
const passportJwt   = require('passport-jwt');
const LocalStrategy = require('passport-local');

const config = require('../config');
const User   = require('../models/user');

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt  = passportJwt.ExtractJwt;

// Setup options for Local strategy
const localOptions = {
  usernameField: 'email'
};

// Create local strategy
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  // Verify this email and password
  // If correct, call 'done' with the user
  // Otherwise, call done with false
  User.findOne({ email }, (err, user) => {
    if (err) {
      return done(err, false);
    }

    if (!user) {
      return done(null, false);
    }

    user.comparePassword(password, (err, isMatch) => {
      if (err) {
        return done(err, false);
      }

      if (!isMatch) {
        return done(null, false);
      }

      return done(null, user);
    });
  });
});

// Setup options for JWT strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  // See if the user ID in the payload exists in our database
  // If it does, call 'done' with that user
  // Otherwise, call 'done' with false
  User.findById(payload.sub, (err, user) => {
    if (err) {
      return done(err, false);
    }

    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  });
});

// Tell Passport to use this strategy
passport.use(localLogin);
passport.use(jwtLogin);
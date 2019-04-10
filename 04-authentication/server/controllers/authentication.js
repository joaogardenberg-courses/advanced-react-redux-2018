const jwt = require('jwt-simple');

const config = require('../config');
const User   = require('../models/user');

const tokenForUser = ({ id }) => {
  const timestamp = new Date().getTime();

  return jwt.encode(
    { sub: id, iat: timestamp },
    config.secret
  );
};

exports.signin = (req, res, next) => {
  // User has already had their email and password auth'd
  // We just need to give them a token

  res.send({ token: tokenForUser(req.user) });
};

exports.signup = (req, res, next) => {
  const {email, password} = req.body;

  // See if a user with the given email exists
  User.findOne({email}, (err, existingUser) => {
    // If any kind of error, return the error
    if (err) {
      return next(err);
    }

    if (!email || !password) {
      return res.status(422).send({ error: 'You must provide email and password' });
    }

    // If a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    // If a user with email does NOT exist, create and save user record
    const user = new User({ email, password });

    user.save((err) => {
      // If any kind of saving error, return the error
      if (err) {
        return next(err);
      }

      // Respond to request indicating the user was created
      res.json({ token: tokenForUser(user) });
    });
  });
};
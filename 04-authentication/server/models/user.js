// Imports
const mongoose = require('mongoose');
const bcrypt   = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

// Define our model
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: {
    type: String
  }
});

// On save hook, encrypt password
userSchema.pre('save', function(next) {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(this.password, salt, null, (err, hash) => {
      if (err) {
        return next(err);
      }

      this.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return callback(err);
    }

    callback(null, isMatch);
  });
};

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;
mongoose.promise = global.Promise;

const userSchema = new Schema({
  username: { type: String, required: true, index:{unique:true} },
  password: { type: String, required:true }
});

userSchema.pre('save', function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);

      // hash the password using our new salt
      bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) return next(err);

          // override the cleartext password with the hashed one
          user.password = hash;
          next();
      });
  });
});

userSchema.methods.checkPassword = function(candidatePassword) {
 return bcrypt.compareSync(candidatePassword, this.password) 
};

const User = mongoose.model("User", userSchema);

module.exports = User;
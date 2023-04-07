const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

let userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

let saltRound = 10;

userSchema.pre("save", function (next) {
  bcrypt.hash(this.password, saltRound, (err, hashedPassword) => {
    if (!err) {
      this.password = hashedPassword;
      next()
    }
  })
});

userSchema.methods.validatePassword = function (password,callback) {
  bcrypt.compare(password, this.password, (err,result) => {
    if (!err) {
      callback(err,result)
    } else {
      next()
    }
  })
}

let userModel = mongoose.model("user_tb", userSchema);

module.exports = userModel;
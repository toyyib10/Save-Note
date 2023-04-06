const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

let userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const saltRound = process.env.ROUNDS;

userSchema.pre("save", function (next) {
  bcrypt.hash(this.password, saltRound, (res,hashedPassword) => {
    if (err) {
      console.log(err)
    } else {
      this.password = hashedPassword;
      next()
    }
  })
})

let userModel = mongoose.model("user_tb", userSchema);

module.exports = userModel;
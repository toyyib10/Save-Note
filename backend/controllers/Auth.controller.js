const userModel = require("../models/User.model")

const signup = (req, res) => {
  let {firstName,lastName,email,phoneNumber,password} = req.body
};

module.exports = { signup };

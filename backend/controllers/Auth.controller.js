const userModel = require("../models/User.model")

const signup = (req, res) => {
  let { firstName, lastName, email, phoneNumber, password } = req.body;
  let userEmail = req.body.email;
  let userNumber = req.body.phoneNumber;
  userModel.find({email:userEmail},(err, result) => {
    if (err) {
      console.log(err)
      res.status(404).send({message: "Unable to fetch data"})
    } else {
      if (result.data > 0) {
        res.status(406).send({message: "Email already exist"})
      } else {
        
      }
    }
  })
};

module.exports = { signup };

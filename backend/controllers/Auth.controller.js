const userModel = require("../models/User.model")

const signup = (req, res) => {
  let userEmail = req.body.email;
  let userNumber = req.body.phoneNumber;
  let form = new userModel(req.body)

  userModel.find({ email: userEmail, phoneNumber:userNumber }).then( (result) => {
    if (result.data > 0) {
      res.status(406).send({message: "Email or Phone number already exist"})
    } else {
      form.save().then((result) => {
        if (result) {
          res.status(200).send({message: "Successfully signed up"})
        }
      }).catch((err) => {
        if (err) {
          res.status(404).send({message: "Unable to signup"})
        }
      })
    }
  }).catch((err) => {
    res.status(404).send({message: "Unable to fetch data"})
  } )
};

module.exports = { signup };

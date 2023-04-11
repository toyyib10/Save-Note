const userModel = require("../models/User.model");
const nodemailer = require("nodemailer");

const user = process.env.MAIL_USERNAME;
const pass = process.env.PASSWORD;
const clientId = process.env.clientId;
const clientSecret = process.env.clientSecret;
const refreshToken = process.env.refreshToken;
const accessToken = process.env.accessToken;

const signup = (req, res) => {
  let userEmail = req.body.email;
  let userNumber = req.body.phoneNumber;
  let form = new userModel(req.body)

  userModel.find({ email: userEmail, phoneNumber:userNumber }).then( (result) => {
    if (result.data > 0) {
      res.status(409).send({message: "Email or Phone number already exist"})
    } else {
      form.save().then((result) => {
        if (result) {
          let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              type: "OAuth2",
              user,
              pass,
              clientId,
              clientSecret,
              refreshToken,
              accessToken,
              expires: 1484314697598
            },
            tls: {
              rejectUnauthorized: false
            }
          })
          let mailOptions = {
            from: "yekeentoyyib@gmail.com",
            to: userEmail,
            subject: "SaveNote Email Verification",
            html: `<button onclick="alert("Clicked")">Click me</button>`
          }
          transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
              console.log(err + "fjfkfkkfkkf")
            } else {
              console.log(info)
              res.status(200).send({message: "Successfully signed up"})
            }
          })
        }
      }).catch((err) => {
        if (err) {
          console.log(err)
          res.status(502).send({message: "Unable to signup"})
        }
      })
    }
  }).catch((err) => {
    res.status(502).send({message: "Unable to fetch data"})
  } )
};

const verify = (req, res) => {

}

const signin = (req, res) => {
  const { userEmail:email, password } = req.body;
  userModel.findOne({ email: userEmail }).then((user) => {
    if (user) {
      user.validatePassword(password, (err,result) => {
        if (err) {
          res.status(502).send({message:"Server error"})
        } else {
          if (result) {
            res.status(200).send({message:"Sign in successful"})
          } else {
            res.status(510).send({message:"Incorrect password"})
          }
        }
      });
    } else {
      res.status(510).send({ message: "Email does not exist" });
    }
  }).catch((err) => {
    if (err) {
      res.status(502).send({message:"Unable to sign in"})
    }
  })
}

module.exports = { signup ,verify ,signin };

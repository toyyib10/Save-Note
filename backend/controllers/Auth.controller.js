const userModel = require("../models/User.model");
const nodemailer = require("nodemailer");

const user = process.env.MAIL_USERNAME;
const pass = process.env.PASSWORD;
const senderEmail = process.env.SENDER_EMAIL;



const signup = (req, res) => {
  let userEmail = req.body.email;
  let userNumber = req.body.phoneNumber;
  let form = new userModel(req.body);

  userModel.find({ email: userEmail, phoneNumber:userNumber }).then( (result) => {
    if (result.data > 0) {
      res.status(409).send({message: "Email or Phone number already exist"})
    } else {
      form.save().then((result) => {
        if (result) {
          let id = result._id.valueOf();
          let transporter = nodemailer.createTransport({
            host: "smtp-mail.outlook.com",
            port:587,
            secure: false,
            tls: {
              ciphers: "SSLv3",
              rejectUnauthorized: false
            },
            auth: {
              user,
              pass
            }
          })
          let mailOptions = {
            from: senderEmail,
            to: userEmail,
            subject: "SaveNote verification",
            html:`
              <div style="border:0.5px solid rgb(207, 204, 204); border-radius: 5px; display:flex; justify-content:center; padding-top: 10px; flex-direction: column; align-items:center;">
                <h1 style="margin-bottom: 25px;">SaveNote</h1>
                <p style="font-size: large;">SaveNote email verification</p> 
                _____________________________________________
                <p style="font-size: large; margin-top: 20px;">Click the link below to verify ${userEmail} email account</p>
                <a href="http://localhost:7000/auth/verify?_id=${id}" style="margin-bottom: 15px;">Verify email</a>
              </div>
            `
          }
          transporter.sendMail(mailOptions, (err, result) => {
            if (err) {
              console.log(err)
            } else {
              res.status(200).send({ message: "Successfully signed up" })
            }
          })  
        }
      }).catch((err) => {
        if (err) {
          console.log(err)
          res.status(409).send({message: "Email or Phone number already exist"})
        }
      })
    }
  }).catch((err) => {
    res.status(502).send({message: "Unable to connect database"})
  } )
};

const verify = (req, res) => {
  const _id = req.body.id;
  userModel.findByIdAndUpdate(_id,{verification:"true"}).then((result) => {
    if (result) {
      res.status(200).send({message:"verification successful"})
    }
  }).catch((err) => {
    if (err) {
      console.log(err)
    }
  })
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

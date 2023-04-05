const express = require("express");
const app = express();
const {appConnect} = require("./controllers/Index.controller")
require("dotenv").config();
const cors = require("cors")
const auth = require("./routes/Auth.route")
const mongoose = require("mongoose")
const port = process.env.PORT;
const uri = process.env.URI;

async function connect(){
  await mongoose.connect(uri)
}

connect().catch(err => {
  if (err) {
    console.log("Unable to connect database")
  } else {
    console.log("Database connection successful")
  }
  
})

app.use(express.json({ limit: "100mb" }))
app.use(express.urlencoded({ extended: true}));
app.use(cors())
app.use("/auth", auth);

app.listen(port, appConnect);
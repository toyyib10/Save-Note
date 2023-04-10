const express = require("express");
const app = express();
const {appConnect} = require("./controllers/Index.controller")
require("dotenv").config();
const cors = require("cors");
const auth = require("./routes/Auth.route");
const mongoose = require("mongoose");
const port = process.env.PORT;
const uri = process.env.URI;

mongoose.connect(uri).then(()=>{
    console.log("Connected to MongoDB");
}).catch(()=>{
  console.log("Couldn't connect to MongoDB");
})

app.use(express.json({ limit: "100mb" }))
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use("/auth", auth);

app.listen(port, appConnect);
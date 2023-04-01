const express = require("express");
const app = express();
require("dotenv").config();
const auth = require("./routes/Auth.route")
const port = process.env.PORT;

app.use("/auth", auth);

app.listen(port, (err) => {
  if (err) {
    console.log("Server unable to start");
  } else {
    console.log("Server started");
  }
});
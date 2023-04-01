const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT;

app.listen(port, (err) => {
  if (err) {
    console.log("Server unable to start");
  } else {
    console.log("Server started");
  }
});
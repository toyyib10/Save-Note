const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors")
const auth = require("./routes/Auth.route")
const port = process.env.PORT;


app.use(express.json({ limit: "100mb" }))
app.use(express.urlencoded({ extended: true}));
app.use(cors())
app.use("/auth", auth);

app.listen(port, (err) => {
  if (err) {
    console.log("Server unable to start");
  } else {
    console.log("Server started");
  }
});
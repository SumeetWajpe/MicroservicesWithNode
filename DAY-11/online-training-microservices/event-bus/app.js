var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const axios = require("axios");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.post("/events", (req, res) => {
  let { type, payload } = req.body;

  if (type == "CourseCreated") {
    // call/notify query service that a new course has to be created !
    console.log("Event Type : ", type);
    axios.post("http://localhost:3002/events", { type, payload });
  }
  res.json({ status: "OK" });
});

module.exports = app;

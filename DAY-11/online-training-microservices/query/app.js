var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.post("/events", (req, res) => {
  // logic for inserting new course/new review in querydb
  let { type } = req.body;
  console.log("Within Query Service !");
  console.log(type);
  res.json({ status: "OK" });
});

module.exports = app;

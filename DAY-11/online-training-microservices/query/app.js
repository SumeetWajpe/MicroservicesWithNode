var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const CourseWithReviews = require("./models/courseswithreviews.model");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.LOCAL_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("open", () => {
  console.log("Connected to query DB  !");
});
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.post("/events", async (req, res) => {
  // logic for inserting new course/new review in querydb
  let { type, payload } = req.body;
  console.log("Within Query Service !");

  if (type == "CourseCreated") {
    let courseToBeAdded = new CourseWithReviews({ ...payload, reviews: [] });
    await courseToBeAdded.save();
  }

  res.json({ status: "OK" });
});

module.exports = app;

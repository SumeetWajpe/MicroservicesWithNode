var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const Course = require("./models/courses.model");
var app = express();
const axios = require("axios");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(process.env.LOCAL_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("open", () => {
  console.log("Connected to Courses DB  !");
});


// adding a new course
app.post("/newcourse", async (req, res) => {
  let newCourse = req.body;
  let newCourseToBeAdded = new Course({
    ...newCourse,
    introVideo: "./videos/React.mp4",
  });
  await newCourseToBeAdded.save();
  // the event bus to be notified that the course has been added to db !
  axios.post("http://localhost:3003/events", {
    type: "CourseCreated",
    payload: newCourseToBeAdded,
  });
  return res.json({ msg: "Course added successfully !" });
});

module.exports = app;

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");


var app = express();

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

//get all courses
app.get("/courses", async (req, res) => {
  let listofcourses = await Course.find({});
  res.json(listofcourses);
});

// adding a new course
app.post("/newcourse", async (req, res) => {
  let newCourse = req.body;
  let newCourseToBeAdded = new Course({
    ...newCourse,
    introVideo: "./videos/React.mp4",
  });
  await newCourseToBeAdded.save();
  return res.json({ msg: "Course added successfully !" });
});

module.exports = app;

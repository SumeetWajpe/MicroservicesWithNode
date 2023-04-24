var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const Course = require("./models/courses.model");
var app = express();
const axios = require("axios");
const amqplib = require("amqplib");
const { randomBytes } = require("crypto");
const cors = require("cors");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
// mongoose.connect("mongodb://mongodb/coursesdb", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.on("open", () => {
//   console.log("Connected to Courses DB  !");
// });

let channel, connection;

async function connectToRabbitMQ() {
  connection = await amqplib.connect("amqp://rabbitmq-service");
  console.log("Rabbit MQ connected !");
  channel = await connection.createChannel();
  channel.assertQueue("course-created-queue");
}

connectToRabbitMQ();

// adding a new course

app.get("/courses", (req, res) => {
  res.json({ courses: [] });
});

app.post("/newcourse", async (req, res) => {
  const courseid = randomBytes(4).toString("hex");
  let newCourse = req.body;
  let newCourseToBeAdded = new Course({
    id: courseid,
    ...newCourse,
    introVideo: "./videos/React.mp4",
  });
  await newCourseToBeAdded.save();
  // the event bus - RabbitMQ to be notified that the course has been added to db !

  channel.sendToQueue(
    "course-created-queue",
    Buffer.from(JSON.stringify({ newcourse: newCourseToBeAdded })),
  );
  return res.json({ msg: "Course added successfully !" });
});

app.listen(3000, () => {
  console.log("Courses running at port 3000 !");
});

module.exports = app;

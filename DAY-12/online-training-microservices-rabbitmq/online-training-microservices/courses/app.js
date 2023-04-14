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

let channel, connection;

async function connectToRabbitMQ() {
  connection = await amqplib.connect("amqp://0.0.0.0:5672");
  console.log("Rabbit MQ connected !");
  channel = await connection.createChannel();
  channel.assertQueue("course-created-queue");
}

connectToRabbitMQ();

// adding a new course
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

module.exports = app;

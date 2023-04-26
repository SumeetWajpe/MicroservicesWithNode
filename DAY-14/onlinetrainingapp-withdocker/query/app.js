var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const CourseWithReviews = require("./models/courseswithreviews.model");
const mongoose = require("mongoose");
require("dotenv").config();
const amqplib = require("amqplib");
const cors = require("cors");
const isAuthenticated = require("isauthenticatedmiddleware");

mongoose.connect("mongodb://mongodb-service/querydb", {
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
app.use(cors());

let channel, connection;

async function connectToRabbitMQ() {
  connection = await amqplib.connect("amqp://rabbitmq-service");
  console.log("Rabbit MQ connected !");
  channel = await connection.createChannel();
  await channel.assertQueue("course-created-queue");
  await channel.assertQueue("review-created-queue");
}

connectToRabbitMQ().then(() => {
  channel.consume("course-created-queue", async data => {
    // console.log(data);
    let { newcourse } = JSON.parse(data.content);
    console.log("Received", newcourse);
    let courseToBeAdded = new CourseWithReviews({ ...newcourse, reviews: [] });
    let result = await courseToBeAdded.save();
    console.log(result);
    channel.ack(data);
  });

  channel.consume("review-created-queue", async data => {
    let { newreview } = JSON.parse(data.content);
    console.log("Received", newreview);
    let theCourse = await CourseWithReviews.findOne({ id: newreview.courseId });

    if (theCourse) {
      await CourseWithReviews.updateOne(
        { id: newreview.courseId },
        {
          $push: { reviews: { id: newreview.id, content: newreview.content } },
        },
      );
    }
    channel.ack(data);
  });
});

//get all courses
app.post("/courses", isAuthenticated, async (req, res) => {
  let listofcourses = await CourseWithReviews.find({});
  res.json(listofcourses);
});

module.exports = app;

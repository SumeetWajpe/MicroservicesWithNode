var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const CourseWithReviews = require("./models/courseswithreviews.model");
const mongoose = require("mongoose");
require("dotenv").config();
const amqplib = require("amqplib");

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

let channel, connection;

async function connectToRabbitMQ() {
  connection = await amqplib.connect("amqp://0.0.0.0:5672");
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
app.get("/courses", async (req, res) => {
  let listofcourses = await CourseWithReviews.find({});
  res.json(listofcourses);
});

// app.post("/events", async (req, res) => {
//   // logic for inserting new course/new review in querydb
//   let { type, payload } = req.body;
//   console.log("Within Query Service !");

//   if (type == "CourseCreated") {
//     let courseToBeAdded = new CourseWithReviews({ ...payload, reviews: [] });
//     await courseToBeAdded.save();
//   }

//   res.json({ status: "OK" });
// });

module.exports = app;

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const Review = require("./models/reviews.model");
var app = express();
const amqplib = require("amqplib");
const { randomBytes } = require("crypto");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb://mongodb-service/reviewsdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("open", () => {
  console.log("Connected to Reviews DB  !");
});

let channel, connection;

async function connectToRabbitMQ() {
  connection = await amqplib.connect("amqp://rabbitmq-service");
  console.log("Rabbit MQ connected !");
  channel = await connection.createChannel();
  channel.assertQueue("review-created-queue");
}

connectToRabbitMQ();

//get  reviews
app.get("/reviews", async (req, res) => {
  let listofreviews = await Review.find({});
  res.json(listofreviews);
});

// adding a  review
app.post("/courses/:id/newreview", async (req, res) => {
  const reviewid = randomBytes(4).toString("hex");
  let { content } = req.body;
  const courseId = req.params.id;
  let reviewToBeAdded = Review({
    reviewid,
    content,
    courseId,
  });
  await reviewToBeAdded.save();
  // notify the event bus
  channel.sendToQueue(
    "review-created-queue",
    Buffer.from(
      JSON.stringify({ newreview: { id: reviewid, content, courseId } }),
    ),
  );
  return res.json({ msg: "New review added successfully !" });
});

module.exports = app;

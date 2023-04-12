var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const Review = require("./models/reviews.model");
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
  console.log("Connected to Reviews DB  !");
});

//get  reviews
app.get("/reviews", async (req, res) => {
  let listofreviews = await Review.find({});
  res.json(listofreviews);
});

// adding a  review
app.post("/newreview", async (req, res) => {
  let review = req.body;
  let reviewToBeAdded = Review({
    ...review,
  });
  await reviewToBeAdded.save();
  return res.json({ ms: "New review added successfully !" });
});

module.exports = app;

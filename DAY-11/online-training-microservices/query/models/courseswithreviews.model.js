const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseWithReviewsSchema = new Schema({
  id: Number,
  title: String,
  price: Number,
  rating: Number,
  likes: Number,
  introVideo: String,
  imageUrl: String,
  description: String,
});

module.exports = CourseWithReviews = mongoose.model(
  "courseswithreviews",
  CourseWithReviewsSchema,
);

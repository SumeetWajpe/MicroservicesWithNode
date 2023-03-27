const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  id: Number,
  title: String,
  price: Number,
  rating: Number,
  likes: Number,
  trainer: String,
  imageUrl: String,
  description: String,
});

module.exports = Course = mongoose.model("courses", CourseSchema);

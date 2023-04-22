const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  id: String,
  title: String,
  price: Number,
  rating: Number,
  likes: Number,
  introVideo: String,
  imageUrl: String,
  description: String,
});

module.exports = Course = mongoose.model("courses", CourseSchema);

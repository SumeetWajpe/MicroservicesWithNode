const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  id: Number,
  content: String,
});

module.exports = Review = mongoose.model("reviews", ReviewSchema);

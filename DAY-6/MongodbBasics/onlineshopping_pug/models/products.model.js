const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  id: Number,
  title: String,
  price: Number,
});

module.exports = mongoose.model("products", productsSchema);

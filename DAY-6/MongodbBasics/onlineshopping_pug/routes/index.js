var express = require("express");
var router = express.Router();
const Product = require("../models/products.model");

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    // fetching data from mongodb
    let products = await Product.find({});
    res.render("index", { products });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

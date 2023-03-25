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

router.post("/newproduct", async (req, res) => {
  try {
    // req.body
    const { id, title, price } = req.body;
    let newProduct = new Product({ id, title, price });
    await newProduct.save();
    res.status(201).send("product added successfully !");
  } catch (error) {}
});

module.exports = router;

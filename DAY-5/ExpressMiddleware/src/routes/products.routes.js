const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let products = [
    { id: 1, title: "MacBook Pro", price: 250000 },
    { id: 2, title: "MacBook Air", price: 200000 },
    { id: 3, title: "Nike Shoes", price: 2000 },
  ];
  res.json(products);
});

module.exports = router;

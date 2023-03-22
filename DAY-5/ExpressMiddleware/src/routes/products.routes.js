const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let products = [
    { id: 1, title: "MacBookPro", price: 250000 },
    { id: 2, title: "MacBookAir", price: 200000 },
  ];
  res.json(products);
});

module.exports = router;

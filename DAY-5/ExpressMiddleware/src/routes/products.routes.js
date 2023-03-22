const express = require("express");
const router = express.Router();
let products = [
  { id: 1, title: "MacBook Pro", price: 250000 },
  { id: 2, title: "MacBook Air", price: 200000 },
  { id: 3, title: "Nike Shoes", price: 2000 },
];

router.get("/", (req, res) => {
  res.json(products);
});

router.delete("/delete/:id", (req, res) => {
  let theProductId = req.params.id;
  // delete logic | db
  products = products.filter(p => p.id != theProductId);
  console.log(products);
  res.json({ msg: "success" });
});

module.exports = router;

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //   res.send("<h1>Hello World !</h1>");
  //   res.json({ msg: "Hello Express !" });
  res.sendFile("Index.html", { root: __dirname });
});
app.get("/script.js", (req, res) => {
  res.sendFile("script.js", { root: __dirname });
});

app.get("/products", (req, res) => {
  let products = [
    { id: 1, title: "MacBookPro", price: 250000 },
    { id: 2, title: "MacBookAir", price: 200000 },
  ];
  res.json(products);
});

// * - should be placed at the last after all endpoints are defined !
// app.use((req, res) => {
//   res.status(404).send("Resource not found !");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

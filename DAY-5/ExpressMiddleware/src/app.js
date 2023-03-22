const express = require("express");
const cors = require("cors");
const app = express();
const productsRouter = require("./routes/products.routes");

const port = 4000;

// built-in middleware
app.use(express.static("src/static"));
app.use(express.json()); // reads the request object & populates req.body property
app.use(cors());
// routes
app.use("/products", productsRouter); // register productsRouter

app.get("/", (req, res) => {
  res.sendFile("Index.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

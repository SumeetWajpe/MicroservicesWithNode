const express = require("express");
const app = express();
//const productsRouter = require("./routes/products.routes");

const port = 4000;

// built-in middleware
app.use(express.static("src/static"));
app.use(express.json()); // reads the request object & populates req.body property
// routes
//app.use("/products", productsRouter); // register productsRouter

// view engine setup
app.set("views", "views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

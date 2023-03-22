const express = require("express");
const app = express();
const port = 3000;

// built-in middleware
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile("Index.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

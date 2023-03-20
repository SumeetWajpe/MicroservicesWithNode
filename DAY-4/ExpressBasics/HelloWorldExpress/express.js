const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //   res.send("<h1>Hello World !</h1>");
  //   res.json({ msg: "Hello Express !" });
  res.sendFile("Index.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

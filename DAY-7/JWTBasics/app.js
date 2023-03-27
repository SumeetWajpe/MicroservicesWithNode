var createError = require("http-errors");
var express = require("express");
var path = require("path");
require("dotenv").config();
var jwt = require("jsonwebtoken");

var app = express();

// /login - create a JWT
app.post("/login", (req, res) => {
  // get username + pwd from req.body
  // verify is user exists
  // sign the token()

  let payload = { name: "John Barack", lastLogin: "Monday" };
  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: "2Days" },
    (err, token) => {
      if (err) console.log(err);
      else return res.json({ token });
    },
  );
});

// /verify - verify the JWT
app.post("/verify", () => {
  // verify()
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

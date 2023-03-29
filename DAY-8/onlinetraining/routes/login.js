const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
require("dotenv").config();
var jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.render("error", { message: "User does not exist !" });
  }
  // sign -> generate the token !
  let payload = { email };
  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: "2 Days" },
    (err, token) => {
      if (err) console.log(err);
      else {
        // create a cookie
        res.cookie("jwt-token", token);
        return res.redirect(302, "http://localhost:3000/courses");
      }
    },
  );
});

module.exports = router;

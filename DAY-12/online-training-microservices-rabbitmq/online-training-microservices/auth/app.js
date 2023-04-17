var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
let User = require("./models/user.model");
var app = express();
require("dotenv").config();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.post("/auth/register", async (req, res) => {
  const { email, password, name } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.json({ message: "User already existing !" });
  } else {
    const newUser = new User({ email, password, name });
    await newUser.save();
    return res.json(newUser);
  }
});

app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(401).json({ message: "User does not exist !" });
  }
  // sign -> generate the token !
  let payload = { email: user.email, name: user.name };
  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: "2 Days" },
    (err, token) => {
      if (err) console.log(err);
      else {
        return res.json({ token });
      }
    },
  );
});

module.exports = app;

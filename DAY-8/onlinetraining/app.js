var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");

var logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

var loginRouter = require("./routes/login");
var coursesRouter = require("./routes/courses");

var app = express();

// mongoose.connect(
//   "mongodb+srv://sumeetwajpe:vNwbqlBd7P5omI57@cluster0.xd8xtse.mongodb.net/trainingdb_atlas",
// );
// mongoose.connection.once("open", () => {
//   console.log("Connected to Online Training DB - Atlas !");
// });

mongoose.connect(process.env.LOCAL_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("open", () => {
  console.log("Connected to Online Training DB !");
});

mongoose.connection.on("error", err => {
  console.log(err);
});
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", loginRouter);
app.use("/courses", coursesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

const express = require("express");
const path = require("path");
const coursesRouter = require("./routes/courses.route");

const app = express(); // represents an application

// middlewares
app.use(express.static("src/static"));
app.use(express.json()); // to read the payload coming from client & populate the req.body
app.use("/courses", coursesRouter);

app.get("/", (req, res) => {
  res.sendFile("Courses.html", { root: __dirname });
});

app.use((req, res) => {
  res.status(404).send("Resource Not Found !");
});

app.listen(4000, () => {
  console.log("Express running at 4000 !");
});

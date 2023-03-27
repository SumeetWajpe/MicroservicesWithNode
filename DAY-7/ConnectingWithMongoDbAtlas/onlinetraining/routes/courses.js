const express = require("express");
const router = express.Router();
let Course = require("../models/course.model");
const fs = require("fs");
const path = require("path");

router.get("/", async(req, res) => {
  let listofcourses = await Course.find({});
  res.render("courses", { title: "List Of Courses", listofcourses });
});

router.get("/coursedetails/:id", (req, res) => {
  let courseId = +req.params.id;
  let course = listofcourses.find(course => course.id === courseId);
  res.render("coursedetails", { course });
});

router.route("/video/:id").get((req, res) => {
  let courseId = +req.params.id;
  let course = listofcourses.find(course => course.id === courseId);
  let videoPath = course.introVideo;

  console.log(videoPath);
  const range = req.headers.range;
  const videoSize = fs.statSync(videoPath).size;
  console.log(videoSize);

  const CHUNK_SIZE = 10 ** 6; // 1 MB
  // range
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

  // headers
  const contentLength = end - start + 1;
  const headers = {
    "content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Type": "video/mp4",
    "Content-Length": contentLength,
  };
  const videoStream = fs.createReadStream(videoPath, {
    start,
    end,
  });
  res.writeHead(206, headers);

  videoStream.pipe(res); // stream the video as response to client
});
// router.post("/newcourse", (req, res) => {
//   let newCourse = req.body;
//   courses.push(newCourse);
//   res.json({ msg: "success" });
// });

// router.delete("/:id", (req, res) => {
//   // delete logic
//   let theCourseId = +req.params.id;
//   courses = courses.filter(course => course.id != theCourseId); // database
//   res.json({ msg: "success" });
// });

module.exports = router;

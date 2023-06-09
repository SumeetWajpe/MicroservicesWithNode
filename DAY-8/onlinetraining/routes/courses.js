const express = require("express");
const router = express.Router();
let Course = require("../models/course.model");
const fs = require("fs");
const path = require("path");
const isAuthenticated = require("../middleware/auth.middleware");

router.get("/", isAuthenticated, async (req, res) => {
  let listofcourses = await Course.find({});
  res.render("courses", {
    title: "List Of Courses",
    listofcourses,
    name: req.user.name,
  });
});

router.get("/coursedetails/:id", isAuthenticated, async (req, res) => {
  let courseId = +req.params.id;
  let course = await Course.findOne({ id: courseId });
  res.render("coursedetails", { course, name: req.user.name });
});

router.get("/video/:id", isAuthenticated, async (req, res) => {
  let courseId = +req.params.id;
  let course = await Course.findOne({ id: courseId });
  let videoPath = course.introVideo;

  const range = req.headers.range;
  const videoSize = fs.statSync(videoPath).size;

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
router.get("/newcourse", isAuthenticated, async (req, res) => {
  //console.log(req.user);
  res.render("newcourse", { title: "New Course", name: req.user.name });
});
router.post("/newcourse", isAuthenticated, (req, res) => {
  let newCourse = req.body;
  let newCourseToBeAdded = new Course({
    ...newCourse,
    introVideo: "./videos/React.mp4",
  });
  newCourseToBeAdded.save();
  return res.redirect("http://localhost:3000/courses");
});

// router.delete("/:id", (req, res) => {
//   // delete logic
//   let theCourseId = +req.params.id;
//   courses = courses.filter(course => course.id != theCourseId); // database
//   res.json({ msg: "success" });
// });

module.exports = router;

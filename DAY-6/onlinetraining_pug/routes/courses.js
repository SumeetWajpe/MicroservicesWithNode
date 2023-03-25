const express = require("express");
const router = express.Router();
let listofcourses = require("../models/course.model");

router.get("/", (req, res) => {
  res.render("courses", { title: "List Of Courses", listofcourses });
});

router.get("/coursedetails/:id", (req, res) => {
  let courseId = +req.params.id;
  let course = listofcourses.find(course => course.id === courseId);
  res.render("coursedetails", { course });
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

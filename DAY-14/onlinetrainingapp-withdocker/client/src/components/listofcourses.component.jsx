import React, { useEffect, useState } from "react";
import Course from "./course.component";

function ListOfCourses() {
  let [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://onlinetraining.com/courses", {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage["jwt-token"]}`,
      },
    })
      .then(res => res.json())
      .then(courses => setCourses(courses));
  }, []);
  return (
    <div>
      <header>
        <h1>List of Courses</h1>
      </header>
      <main>
        <div className="row">
          {courses.map(course => (
            <Course coursedetails={course} key={course.id} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default ListOfCourses;

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewCourse() {
  let [newCourse, setNewCourse] = useState({});
  const navigate = useNavigate();
  return (
    <div className="row justify-content-center m-2">
      <div className="col-4 justify-content-center">
        <header>
          <h1>New Course</h1>
        </header>
        <form
          onSubmit={e => {
            e.preventDefault();
            fetch("http://onlinetraining.com/newcourse", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                ...newCourse,
              }),
            })
              .then(res => res.json())
              .then(message => {
                if (message.msg == "Course added successfully !") {
                  navigate("/dashboard/listofcourses");
                }
              }); // POST
          }}
          className="alert alert-secondary"
        >
          <div className="col">
            <label>
              Title:
              <input
                type="text"
                id="txtCourseTitle"
                className="form-control"
                onInput={e => {
                  setNewCourse({ ...newCourse, title: e.target.value });
                }}
              />
            </label>
          </div>
          <div className="col">
            <label>
              Price:
              <input
                type="number"
                id="txtCoursePrice"
                className="form-control"
                onInput={e => {
                  setNewCourse({ ...newCourse, price: +e.target.value });
                }}
              />
            </label>
          </div>

          <div className="col">
            <label>
              Rating:
              <input
                type="number"
                id="txtCourseRating"
                className="form-control"
                onInput={e => {
                  setNewCourse({ ...newCourse, rating: +e.target.value });
                }}
              />
            </label>
          </div>
          <div className="col">
            <label>
              Likes:
              <input
                type="number"
                id="txtCourseLikes"
                className="form-control"
                onInput={e => {
                  setNewCourse({ ...newCourse, likes: +e.target.value });
                }}
              />
            </label>
          </div>
          <div className="col">
            <label>
              Image Url:
              <input
                type="text"
                id="txtCourseImageUrl"
                className="form-control"
                onInput={e => {
                  setNewCourse({ ...newCourse, imageUrl: e.target.value });
                }}
              />
            </label>
          </div>
          <br />
          <button className="btn btn-success my-2">Add New Course</button>
        </form>
      </div>
    </div>
  );
}

export default NewCourse;

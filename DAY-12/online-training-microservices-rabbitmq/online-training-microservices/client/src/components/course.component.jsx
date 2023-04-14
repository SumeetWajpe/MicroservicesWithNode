import React from "react";

function Course({ coursedetails }) {
  return (
    <div className="col-md-4">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={coursedetails.imageUrl}
          className="card-img-top"
          width="200px"
          alt={coursedetails.title}
        />
        <div className="card-body">
          <h5 className="card-title">{coursedetails.title}</h5>
          <p className="card-text">{coursedetails.price}</p>
          <p className="card-text">{coursedetails.rating}</p>
          <p className="card-text">{coursedetails.likes}</p>
        </div>
      </div>
    </div>
  );
}

export default Course;

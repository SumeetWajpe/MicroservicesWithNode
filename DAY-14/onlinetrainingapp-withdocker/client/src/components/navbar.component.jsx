import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./auth_provider";

export default function Navbar() {
  const navigate = useNavigate();
  const authCtx = useAuth();
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/dashboard/listofcourses">
            Online Training
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/dashboard/listofcourses">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/newcourse">
                  New Course
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            {/* <Link to="/">Logout</Link> */}
            <span className="text-success">
              Welcome {authCtx?.user?.email} !
            </span>
            <button
              className="btn btn-primary"
              onClick={() => {
                authCtx?.logout();
                localStorage.clear(); // token will be cleared or localStorage["jwt-token"] = "";
                navigate("/");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

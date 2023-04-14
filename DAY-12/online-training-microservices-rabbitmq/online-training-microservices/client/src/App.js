import ListOfCourses from "./components/listofcourses.component";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NewCourse from "./components/newcourse.component";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
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
                <Link className="nav-link active" to="/">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/newcourse">
                  New Course
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<ListOfCourses />} />
        <Route path="/newcourse" element={<NewCourse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

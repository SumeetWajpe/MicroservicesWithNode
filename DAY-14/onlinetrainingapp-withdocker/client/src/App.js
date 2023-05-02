import ListOfCourses from "./components/listofcourses.component";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NewCourse from "./components/newcourse.component";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Dashboard from "./components/dashboard.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="listofcourses" element={<ListOfCourses />} />
          <Route path="newcourse" element={<NewCourse />} />
        </Route>

        {/* <Route path="/courses" element={<ListOfCourses />} />
        <Route path="/newcourse" element={<NewCourse />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

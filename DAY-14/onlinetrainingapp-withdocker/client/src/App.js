import ListOfCourses from "./components/listofcourses.component";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NewCourse from "./components/newcourse.component";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Dashboard from "./components/dashboard.component";
import AuthProvider from "./components/auth_provider";
import RequireAuth from "./components/requireauth.component";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route path="listofcourses" element={<ListOfCourses />} />
            <Route path="newcourse" element={<NewCourse />} />
          </Route>

          {/* <Route path="/courses" element={<ListOfCourses />} />
        <Route path="/newcourse" element={<NewCourse />} /> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

import ListOfCourses from "./components/listofcourses.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewCourse from "./components/newcourse.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListOfCourses />} />
        <Route path="/newcourse" element={<NewCourse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

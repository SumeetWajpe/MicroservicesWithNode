import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then(res => res.json())
      .then(products => console.log(products));
  }, []);
  return (
    <div className="App">
      <h1> Using React as a client</h1>
    </div>
  );
}

export default App;

import { Add } from "./Math.js";
import axios from "axios";

console.log(`The addition is : ${Add(20, 30)}`);
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
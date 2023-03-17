const fs = require("fs");

fs.readFile("Input.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

console.log("Program Ended !");

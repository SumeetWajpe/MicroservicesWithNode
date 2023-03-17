const fs = require("fs");

const dataFromTheFile = fs.readFileSync("Input.txt", { encoding: "utf-8" });
console.log(dataFromTheFile);
console.log("Program Ended !");

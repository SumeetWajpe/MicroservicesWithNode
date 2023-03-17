// const MathModule = require("./Math");

// // console.log("The addition is : " + MathModule.Add(20, 30));
// console.log(`The addition is : ${MathModule.Add(20, 30)}`);
// console.log(`The product is : ${MathModule.Product(20, 30)}`);

// Choose only the Add method
const Addition = require("./Math").Add;
console.log(`The addition is : ${Addition(20, 30)}`);

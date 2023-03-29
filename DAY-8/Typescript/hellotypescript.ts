// console.log("Hello Typescript !");

var x = "10"; // Type inference
console.log(typeof x);
//x = "Hello!"; // Type - safe

// Type annotations
var str: string;
// str = 100;
var b: boolean;
var n: number;
var z: any; // not a good practise
z = 10;
z = "Hello";
z = true;
z = [];
z = {};
console.log(z);

// Functions

function Add(x: number, y: number): number {
  return x + y;
}
let result: number = Add(30, 30);
console.log(result);

// console.log("Hello Typescript !");
var x = "10"; // Type inference
console.log(typeof x);
//x = "Hello!"; // Type - safe
// Type annotations
var str;
// str = 100;
var b;
var n;
var z; // not a good practise
z = 10;
z = "Hello";
z = true;
z = [];
z = {};
console.log(z);
// Functions
function Add(x, y) {
    return x + y;
}
var result = Add(30, 30);
console.log(result);

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

// function Add(x: number, y: number): number {
//   return x + y;
// }
// let result: number = Add(30, 30);
// console.log(result);

// function Add(x: number, y: number): number | string {
//   if (x == 0) {
//     return "x should be greater that 0 !";
//   }
//   return x + y;
// }
// let result: number | string = Add(30, 30);
// console.log(result);

// Optional Parameters

// function PrintBook(author?: string, title?: string): void {
//   console.log(author, title);
// }

// PrintBook();
// PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire");

// function PrintBook(
//   author: string = "Unknown",
//   title: string = "Unknown",
// ): void {
//   console.log(author, title);
// }
// PrintBook();

// Arrow Functions
let Add = (x: number, y: number): number => x + y;
console.log(Add(30, 50));

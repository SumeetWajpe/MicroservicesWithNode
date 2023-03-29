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
var Add = function (x, y) { return x + y; };
console.log(Add(30, 50));
// Array
var cars = ["BMW", "AUDI", "FERRARI"];
var moreCars = new Array("TATA", "MAHINDRA"); // Generics
console.log(moreCars);
// let player: IPlayer = { name: "Djokovic", isWorldNo1: true, xyz: 123 };
// Classes
var Emp = /** @class */ (function () {
    function Emp(empName, empSalary) {
        if (empName === void 0) { empName = "Unknown"; }
        if (empSalary === void 0) { empSalary = 0; }
        this.empName = empName;
        this.empSalary = empSalary;
    }
    return Emp;
}());
var e = new Emp("Viraj", 200000);

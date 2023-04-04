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
let Add = (x, y) => x + y;
console.log(Add(30, 50));
// Array
let cars = ["BMW", "AUDI", "FERRARI"];
let moreCars = new Array("TATA", "MAHINDRA"); // Generics
console.log(moreCars);
class Player {
}
// Classes
class Emp {
    constructor(empName = "Unknown", empSalary = 0) {
        this.empName = empName;
        this.empSalary = empSalary;
    }
    getSalary() {
        return this.empSalary;
    }
}
// let e: Emp = new Emp("Viraj", 200000);
class Manager extends Emp {
    constructor(name, salary, incentives) {
        super();
        this.incentives = incentives;
    }
    getSalary() {
        return this.empSalary + this.incentives;
    }
}
let mgr = new Manager("Rohit", 200000, 100000);
// Enhanced Class Syntax
class EnhancedEmp {
    constructor(empName, empSalary) {
        this.empName = empName;
        this.empSalary = empSalary;
    }
}
let enhancedEmp = new EnhancedEmp("John", 100000);
// Generics - Function, Interface, Class
function Swap(x, y) {
    // swap logic
}
Swap("Hello", "World");
Swap(10, 20);
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
let point = new Point(100, 200);
// constraints
class Company {
}
// let cmp = new Company<number>();// Error
let cmp = new Company(); // Allowed
var Designations;
(function (Designations) {
    Designations[Designations["Developer"] = 100] = "Developer";
    Designations[Designations["Architect"] = 101] = "Architect";
    Designations[Designations["Trainer"] = 102] = "Trainer";
    Designations[Designations["Tester"] = 103] = "Tester";
})(Designations || (Designations = {}));
let d = Designations.Trainer;
console.log(d);

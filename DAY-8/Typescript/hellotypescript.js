// console.log("Hello Typescript !");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());
// Classes
var Emp = /** @class */ (function () {
    function Emp(empName, empSalary) {
        if (empName === void 0) { empName = "Unknown"; }
        if (empSalary === void 0) { empSalary = 0; }
        this.empName = empName;
        this.empSalary = empSalary;
    }
    Emp.prototype.getSalary = function () {
        return this.empSalary;
    };
    return Emp;
}());
// let e: Emp = new Emp("Viraj", 200000);
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, salary, incentives) {
        var _this = _super.call(this) || this;
        _this.incentives = incentives;
        return _this;
    }
    Manager.prototype.getSalary = function () {
        return this.empSalary + this.incentives;
    };
    return Manager;
}(Emp));
var mgr = new Manager("Rohit", 200000, 100000);
// Enhanced Class Syntax
var EnhancedEmp = /** @class */ (function () {
    function EnhancedEmp(empName, empSalary) {
        this.empName = empName;
        this.empSalary = empSalary;
    }
    return EnhancedEmp;
}());
var enhancedEmp = new EnhancedEmp("John", 100000);
// Generics - Function, Interface, Class
function Swap(x, y) {
    // swap logic
}
Swap("Hello", "World");
Swap(10, 20);
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var point = new Point(100, 200);
// constraints
var Company = /** @class */ (function () {
    function Company() {
    }
    return Company;
}());
// let cmp = new Company<number>();// Error
var cmp = new Company(); // Allowed
var Designations;
(function (Designations) {
    Designations[Designations["Developer"] = 100] = "Developer";
    Designations[Designations["Architect"] = 101] = "Architect";
    Designations[Designations["Trainer"] = 102] = "Trainer";
    Designations[Designations["Tester"] = 103] = "Tester";
})(Designations || (Designations = {}));
var d = Designations.Trainer;
console.log(d);

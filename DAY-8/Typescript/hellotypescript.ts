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

// Array
let cars: string[] = ["BMW", "AUDI", "FERRARI"];
let moreCars: Array<string> = new Array<string>("TATA", "MAHINDRA"); // Generics
console.log(moreCars);

// Interfaces
interface IPerson {
  name: string;
  age: number;
}
interface IPlayer {
  type: string;
  isSeeded: boolean;
}

class Player implements IPlayer, IPerson {
  name: string;
  age: number;
  type: string;
  isSeeded: boolean;
}

// Classes
class Emp {
  //   private empId: number;
  public empName: string;
  public empSalary: number;

  constructor(empName = "Unknown", empSalary = 0) {
    this.empName = empName;
    this.empSalary = empSalary;
  }

  getSalary(): number {
    return this.empSalary;
  }
}

// let e: Emp = new Emp("Viraj", 200000);

class Manager extends Emp {
  incentives: number;
  constructor(name: string, salary: number, incentives: number) {
    super();
    this.incentives = incentives;
  }
  getSalary(): number {
    return this.empSalary + this.incentives;
  }
}

let mgr: Manager = new Manager("Rohit", 200000, 100000);

// Enhanced Class Syntax
class EnhancedEmp {
  constructor(public empName: string, public empSalary: number) {}
}

let enhancedEmp = new EnhancedEmp("John", 100000);

// Type alias

type Header = {
  authorization: string;
  contenttype: string;
};

type MyRequest = {
  body: string;
  headers: Header;
};

// Generics - Function, Interface, Class

function Swap<T>(x: T, y: T) {
  // swap logic
}

Swap<string>("Hello", "World");
Swap<number>(10, 20);

"use strict";
let id = 5;
let myName = "Yajindra..Gautam";
console.log(`MY name is ${myName}`);
// Basic Types
let company = "CodewithYaji"; //  Type string
let isPublished = true; // type boolean
let y = "Hello"; // Type any
y = 5; // Data type of any can be re-assigned
// Array
let ids = [1, 2, 3, 4, 5]; // array of ids which only contain number
let names = ["Ram", "shyam", "yaji"]; // array of number which contains string value
let mix = ["yaji", 5, [1, 2, 3]]; // array of any takes any value
// Tuple -> defines the exact type and size of an array
let tupleArr = [1, true, "t"];
// Array of tuple
let employee;
employee = [
    [1, "Yajindra"],
    [2, "Ukesh"],
    [3, "Sijan"],
];
// Union
let pid = "5";
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction["Down"] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);
const user = {
    id: 1,
    name: "Yajindra",
    post: "Software Developer",
};
console.log(`Hi my name is ${user.name} and I'm ${user.post}`);
// Type Assertion
let cid = "1";
//let customerId = <number>cid
let customerId = cid;
//Function - with return type
function addNUmber(x, y) {
    return x + y;
}
console.log("Add -->", addNUmber(5, 5));
// Function without return - void
function printMessage(message) {
    console.log("Yor message is -->", message);
}
// Executing function
printMessage('HI Yajindra. Learning Typescript is fun..');
const dev = {
    title: 'Node Developer',
    salary: 60000,
    devname: 'Yajindra'
};
console.log(`Dear ${dev.devname} your salary is ${dev.salary} and your post is ${dev.title}.`);
const add = (x, y) => {
    return x + y;
};
console.log('Add using interface -->', add(10, 10));
// Classes - class are used to create obj
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is registered..!`;
    }
}
const ukes = new Person(1, 'Ukes');
const ram = new Person(2, 'Ram');
console.log('Ukes ==>', ukes, 'Ram -->', ram);
console.log(ukes.register());

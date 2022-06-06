let id: number = 5;

let myName: string = "Yajindra..Gautam";
console.log(`MY name is ${myName}`);

// Basic Types
let company: string = "CodewithYaji"; //  Type string
let isPublished: boolean = true; // type boolean
let y: any = "Hello"; // Type any

y = 5; // Data type of any can be re-assigned

// Array
let ids: number[] = [1, 2, 3, 4, 5]; // array of ids which only contain number
let names: string[] = ["Ram", "shyam", "yaji"]; // array of number which contains string value
let mix: any[] = ["yaji", 5, [1, 2, 3]]; // array of any takes any value

// Tuple -> defines the exact type and size of an array
let tupleArr: [number, boolean, string] = [1, true, "t"];
// Array of tuple
let employee: [number, string][];
employee = [
  [1, "Yajindra"],
  [2, "Ukesh"],
  [3, "Sijan"],
];

// Union
let pid: number | string = "5";
//Enum
enum Direction {
  Up = 1,
  Down = "Down",
  Left = 2,
  Right = "Right",
}
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);

// OBject
type User = {
  id: number;
  name: string;
  post: string;
};
const user: User = {
  id: 1,
  name: "Yajindra",
  post: "Software Developer",
};

console.log(`Hi my name is ${user.name} and I'm ${user.post}`);

// Type Assertion
let cid: any = "1";
//let customerId = <number>cid
let customerId = cid as number;

//Function - with return type
function addNUmber(x: number, y: number): number {
  return x + y;
}

console.log("Add -->", addNUmber(5, 5));
// Function without return - void
function printMessage(message:string | number):void
{
    console.log("Yor message is -->", message);
}
// Executing function
printMessage('HI Yajindra. Learning Typescript is fun..');

// Interfaces
interface postInterfaces {
   readonly title:string, // To implement read only use readonly
    salary: number,
    devname:string,
    age?:number, // ? for optional
}

const dev:postInterfaces={
    title:'Node Developer',
    salary:60000,
    devname:'Yajindra'
}
console.log(`Dear ${dev.devname} your salary is ${dev.salary} and your post is ${dev.title}.` );

// Applying interface for functions
interface MathFUnc{
    (x:number, y:number):number
}
 const add:MathFUnc = (x:number, y:number) => {
     return x + y;
 }
console.log('Add using interface -->', add(10,10));

// IMplementing interface in class
interface PersonInterface{
    id:number,
    name:string,
}

// Classes - class are used to create obj
class Person implements PersonInterface{
    id:number
    name:string
    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }

    register(){
        return `${this.name} is registered..!`;
    }
}

const ukes = new Person(1,'Ukes');
const ram = new Person(2,'Ram');
console.log('Ukes ==>', ukes, 'Ram -->', ram);
console.log(ukes.register());




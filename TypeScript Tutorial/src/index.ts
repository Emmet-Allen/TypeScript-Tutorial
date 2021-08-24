// TypeScript tutorial : TypeScript Crash Course 2021

// TypeScript is a statically typed superset of Javascript

// Pros: More Robust, Easily Spot Bugs, Predictabilitiy, Readability, Popular
// Cons: More Code To Write, More To Learn, Required Compliation, NOT TRUE Static Typing 

// I don't mind writing more code if it means getting it right the first time. 
// I rather use typescript, makes my code look prettier lmao

//Compiling TypeScript:
// - Uses .ts or .tsxw
// - TSC is used to compile .ts to .js
// - tsconfig.json file to configure how TypeScript works

// - To compile use command "tsc.cmd <filename.ts>""
// - "tsc.cmd --watch <filename.ts>"" will continously watch the file for errors
// - "tsc.cmd --init" Creates a generic tsconfig.json file

// tsconfig.json can be used to configure the TS compilier
// Good Practice: Set "rootDir" to the source folder that the TS will be in
// Good Practice: Set "outDir" to a folder that will hold the compiled TS (JS) file
// This is to keep the working code seperate from the compiled code 

let id = 5; 
// id = "Banna"; //Output: Error, cannot assign string to number, with or without static type due to "type inference"
console.log('ID:', id);

let company : string = "Traversy Media";
let isPublised: boolean = true; 

// The type 'any' can be any unspecifed type. 
let x: any = "Hello";
x = 5; 

// Variables can be initalized with their type
let age : number;
age = 27; 

// To add types to an array, specify the type and then add brackets. 
let ids: number[] = [1,2,3,4,5];
// ids.push("coby"); Error

// Arrays can be also type 'any'
let arr: any[] = [1, true, "hello"];

// A tuple can specify the exact types of info in an array in their specified order
let person: [string, number, boolean] = ["Bob", 43, true];
// let person: [string ,number, boolean] = [43, true, "Bob"] Error

// A tupple array can also be created
let employee: [number, string][];

employee = [
    [1,"Jim"],
    [2,"Billy"],
    [3, "John"]
];

// Unions ( | ) can be used to specify different types for a single assigned variable
let player: number | string;
player = 1;
player = "Ken";

// Enums lets us define a set of constants either numeric or string
enum Directon1{
    Up,
    Down = 20, // Can be set to a static number, each variable thereafter will increment by 1
    Left, // 21
    Right
};

console.log(Directon1.Up); // Output: 0
console.log(Directon1.Left); // Output: 21 Because Left is 1 index more than Down = 20

// Enum is where the members are set to strings
enum Directon2{
    Up = "Up",
    Down = "Down",
    Left = "Left", 
    Right = "Right"
};

console.log(Directon2.Right);

// Objects 
// This is kind of a messy way to implement objects with types
const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: "John"
};

// We can declare the objects that we want to make as a type 
type User = {
    id: number,
    name: string
};
// Then we can invoke that "object type" when we want to create a new object
const user2: User ={
    id: 1,
    name: "David"
};

// Type Assertion: Explicitly telling the compilier that we want to treat an entity as a differet type (like casting)
let cid: any = 1;

// Verison 1 of Type assertion: 
let customerId = <number>cid;

// Version 2 of Type asserition: 
let customerID = cid as number; 

// Functions
//Function parameters more than likely need types, the function itself can also have a return value type 
function addNum(x: number, y:number): number{
    return x + y; 
}
// We can also have a return value type of 'void' when the function doesn't return anything
function log(message: string | number): void{
    console.log(message);
}

// Interfaces can be used to make an abstract class of an object: 
interface animal {
    readonly id: number, // Readonly makes it so that the value of that data member cannot be changed outside the object instance 
    name: string,
    age?: number     // Optional properties, can create a class with or without this property defined in the object
};

const Dog: animal = {
    id: 2,
    name: "Coby"
}

//Dog.id = 5; Output: Error, id is a'read-only' property 

// Interfaces are different than Object Types because Object Types can be used with primatives and unions
type Point = number | string; 
const p1: Point = 5; 
// Interfaces are strictly for creating abstractions

// We can also use Interfaces to define abstract(?) functions... function boiler-plate
interface MathFunc {
    (x:number, y:number): number
}

const add: MathFunc = (x:number, y:number): number => x + y;
const subtract: MathFunc = (x:number, y:number): number => (x - y); 

let sum: number =  add(3,5);
console.log(sum);
let diff: number = subtract(5,3);
console.log(diff);

// Classes 
class Person{
    // Class properties are public by default
    // We can change these properties to either 'public', 'private' or 'protected'
    id: number;
    private name: string;
    readonly married: boolean;
    kids?: number;

// Classes must be intialized with a constructor! We can also define optional properties in the constructor
    constructor(id:number, name:string, married:boolean, kids?:number){
       this.id = id;
       this.name = name; 
       this.married = married;
       this.kids = kids;
    }

    // Use a getter method to get the private values of an object
    getName(){
        return this.name;
    }

    isRegistered() {
        return `${this.name} is registered.`;
    }

}


const brad = new Person(23, "Brad", true); 
const will = new Person(28, "Will", false, 2);
//console.log(brad.name); Error cannot access 'name' outside of Person class
console.log(brad.married);
// brad.name = "Brad 2.0"; Error name cannot be modified outside of Person class
// brad.married = false; Output: Error, married is a read-only property
console.log(brad, will);
console.log(will.getName());
console.log(brad.isRegistered());

// We can also use interfaces with classes to ensure 
// that the classes include those data members and methods
interface EmplInterface{
    id:number,
    name:string,
    salary:number
    isEmployeed(): boolean;
}

// To connect a class with an interface use 'implements'
// Example: class className implements classInterface{
class Empl implements EmplInterface{
    id:number;
    name:string;
    salary:number;

    constructor(id:number, name:string, salary:number){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    isEmployeed = () => {return true;} 

    getFullId = () => {return `${this.id} is ${this.name}'s full Employee Id Number`;}
}

const jim = new Empl(1234, "Jim", 90000);
console.log(jim.isEmployeed());
console.log(jim.getFullId());

// Child class of Parent 'Empl' class
class PerDiemEmpl extends Empl{
    position: string;
    

    constructor(id:number, name:string, salary:number, position: string){
        // 'super' keyword intialized all the variables from parent constructor to its child objects data members
        super(id, name, salary);
        this.position = position;
    }
}

const sally = new PerDiemEmpl(5678, "Sally", 1000000, "Software Engineer");
console.log(sally.name);
console.log(sally.getFullId());
console.log(sally.isEmployeed());

// Generics: Basically templates, able to template a function using <T> and define that templated type within its function calls.
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items);
}

// Set up and intalize arrays
let numArray = getArray<number> ([1,2,3,4]);
// We do not want a string, to be able to be pushed into our 'numArray' so we define type <T> to that of type <string>
let strArray = getArray<string>(["brad", "tim", "john"]);


// This is because we templated the items of the the type 'T' within our function calls.  
// numArray.push('hello'); Output: Argument of type 'string' is not assignable to parameter of type 'number'  
// Ts simple types

// Implicit Type
let firstName = "Rahul";
// firstName = 90; // error

// Explicit Type
let firstName1: string = "Rahul";

// Unable to infer
const json = JSON.parse("88");
console.log(typeof json); // Expected to be an object, but it's a number

// TS Special Types
let u = true;
// u = "string"; // Error
// Math.round(u); // Error

// Setting variable type to any will disable type checking
let a: any = true;
a = 90;
a = "String";

// Any keyword is not preferred by developers because it disables type checking for what typescript made for
// But sometimes we don't know which datatype user pass so for this we can use unknown keyword, it is as same as any but the difference is you can check type of unknown variable
// Let's see an example

function invokeme(callback: any) {
    callback();
}

// Not give an error on compile time but give error on runtime
// invokeme(1);

function invokeme1(callback: unknown) {
    if (typeof callback === 'function') {
        callback();
    }
    console.log(callback);
}

// Works fine
invokeme1(add(2, 3));

function add(a: number, b: number) {
    return a + b;
}

// Never
// let x:never = true; // Error
let x1: never;

// Undefined & NULL, same as javascript undefined and null
let z: undefined = undefined;
let y: null = null;

// Typescript Array
const names: string[] = [];
names.push("Rahul");
// names.push(8); // Error, Only strings can be pushed

// Readonly
const names1: readonly string[] = ["Rahul"];
// names1.push("amit"); // Can't push to this araay because it is readonly

// Type Inference
const numbers = [1, 2, 3, 4];
numbers.push(5); // Works fine
// numbers.push("Ashoka"); // Error, because only numbers can be pushed

let head: number = numbers[0]; // No error
console.log(head);

// Tuples -> A predefined array of predefined length and types for each indexes
// define a tuple
let ourTup: [number, string, boolean];
// intialize correctly
ourTup = [12, "Rahul", true];

// Note -> The order of datatypes and values should be same

// Incorrect initialization
// let ourTup1:[number,string,boolean];
// ourTup = [true,"Rahul",23];

ourTup.push("OMG") // No error, Our tuple has no security after 3+ indexes
let ourTup1: readonly [number, string, boolean] = [12, "Rahul", true];
// ourTup1.push("Can't vro") // Error, cause its a readonly tuple

// Named tuples
const graph: [x: number, y: number] = [12, 34];

// Destructure tuple
const graph1: [number, number] = [13, 2];
const [k, l] = graph1;
console.log(k, l);

// Objects
const obj1: { name: string, age: number, YOB: number } = {
    name: "Rahul",
    age: 12,
    YOB: 2006
}

// Type inference
obj1.YOB = 900; // That's fine
// obj1.YOB = "OPPs" // Error

// Optional Property
// const car: {name:string,mileage:number} = {
//     name:"Toyota",
// Throws an error cause mileage was not defined
// }

// Solution
const car1: { name: string, mileage?: number } = {
    name: "Toyota",
}
// car1.mileage = 12;

console.log(car1.name)
console.log(car1.mileage); // Undefined 

// Enums
// Numeric Enums -> Default
// By default enum intialize it's first value to 0 and increment every other value by 1
enum directions {
    North,
    east,
    west,
    south
}

console.log(directions.North, directions.east, directions.west, directions.south) // 0,1,2,3

// Numeric Enums -> Initialized
enum directions1 {
    North = 1,
    east,
    west,
    south
}

console.log(directions1.North, directions1.east, directions1.west, directions1.south) // 1,2,3,4

// Fully initialized
enum statusCodes {
    ok = 200,
    server_error = 500,
    not_found = 404,
    client_error = 400
}

console.log(statusCodes.ok, statusCodes.server_error, statusCodes.not_found, statusCodes.client_error)

// String enums
enum directions2 {
    North = 'North',
    east = 'east',
    west = 'west',
    south = 'south'
}

console.log(directions2.North, directions2.east, directions2.west, directions2.south) // 1,2,3,4

//* Technically you can mix and match string and numeric enums but it's advised not to do so

// Type aliases -> Allows you to define custom types, supports simple as well as advance types
type CarYear = number;
type CarType = string;
type CarModel = string;

type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}

const carYear: CarYear = 2006;
const carType: CarType = "XUV";
const carModel: CarModel = "Toyota";
const car: Car = {
    year: carYear,
    type: carType,
    model: carModel
};

// Interfaces -> Similar to type aliases, apply to objects only
interface Rectangle {
    height: number,
    width: number
}

const rectangle: Rectangle = {
    height: 12,
    width: 8
}

// Extending interfaces
interface coloredRectangle extends Rectangle {
    color: string
}

const rectangle1: coloredRectangle = {
    height: 12,
    width: 8,
    color: 'red'
}

// Union Types -> Used when a value can be more than a single type
function printStatusCode(code: string | number) {
    console.log(code);
}

printStatusCode(400);
printStatusCode('400');

// Union Errors

// function printStatusCode1(code: string|number){
//     // Throws an error cause string|number has no uppercase method
//     console.log(code.toUpperCase()); 
// }

// Solution
function printStatusCode1(code: string | number) {
    if (typeof code === "string") {
        console.log(code.toUpperCase());
        return;
    }
    console.log(code);
}

printStatusCode1(400);
printStatusCode1("Rahul");

// Function

// Return Type -> The type returned by function is explicitly defined
function getTime(): number {
    return new Date().getTime();
}

console.log(getTime());

// If no return type was there, TypeScript will attempt to infer it through the types of variable or expressions returned

const greet = (): void => {
    console.log("hello")
}

// Parameters -> Should be same as syntax variable declarations
const product = (a: number, b: number) => {
    return a * b;
}

console.log(product(5, 5));

// Optional Parameters 
// By default TS marked every parameter as required but you can mark some optional as well
const ADD = (a: number, b: number, c?: number): number => {
    return a + b + (c || 0);
}

console.log(ADD(2, 3, 90))

// Default Parameters
const ADD1 = (a: number, b: number, c: number = 12): number => {
    return a + b + c;
}

console.log(ADD1(2, 3, 45))

// Rest Parameters
function Add(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}

console.log(Add(12, 34, 1, 2, 3, 4))

// Type Aliases -> Function types can be specified separately from functions with type aliases. These are written similarly as arrow functions

type Negate = (value: number) => number;
const negFunc: Negate = (value) => value - 1;
console.log(negFunc(9));

// Typescript Casting
// using as
let x: unknown = 'hello';
console.log((x as string).length);

// Casting not work, because it does not change the type of data in variable
let y1: unknown = 12;
console.log((y1 as string).length); // undefined

// console.log((4 as string).length); // Error you can't do force casting like this

// casting with <>
//Using <> works the same as casting with as
let x2: unknown = 'hello';
console.log((<string>x).length);

// Force casting, To override the errors first cast to known and then cast to target type
let z1 = 'hello';
console.log(((z1 as unknown) as number)); // Not throw errors but can't typecaste to number because it's a string

// Key of
// When used on an object type with explicit keys, keyof creates a union type with those keys.

interface Person11 {
    name: string;
    age: number;
}

// keyof `Person` here creates a union of "name" and "age", other strings will not be allowed

function printPersonProperty(person:Person11, property: keyof Person11){
    console.log(`The ${property} of person is ${person[property]}`);
}

let person11 = {
    name:"Rahul",
    age:18 
}

printPersonProperty(person11,"name");
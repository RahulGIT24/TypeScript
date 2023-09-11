// Arrays and objects
let stringArray = ['one', 'two', 'three'];

let guitars = ['old', 'new', 'strat', 5150]

let mixedData = ['EVH', 1098, true];

// stringArray[0] = 42; // Error only strings can be assigned
// stringArray.push(42)

stringArray[0] = 'Rahul'; // This is valid
stringArray.push("Aman");

// This is valid because guitars array can hold both numbers and strings
guitars[0] = 1440;

// Invalid cause I am trying to add boolean
// guitars[1] = true;
// Invalid
// guitars.unshift(true);

// Valid 
guitars.unshift('Jim');

// Invalid because in stringArray only strings are allowed
// stringArray = guitars;

// Valid because in guitars strings and numbers both are allowed
guitars = stringArray;

// Valid
mixedData = guitars;
mixedData = stringArray;

let test = [];
let brands: string[] = [];

// Invalid
// brands.push(23); // Only strings are allowed

// Valid
brands.push('Rahul');

//* Tuple
let myTuple: [string, number, boolean] = ['Dave', 12, true];

// It's an array
let mixed = ['John', 1, false]

// Valid 
mixed = myTuple;

// Invalid
// myTuple = mixed;

// Objects
let myObj: object;

// We can assign it as an object
myObj = [];

const exampleObject = {
    prop1: 'Dave',
    prop2: true
}

// Invalid it requires boolean
// exampleObject.prop2 = 3;

interface Guitarist {
    name?: string, // Optional property
    active: boolean, 
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: "Rahul",
    active: false,
    albums: [1867, 5150, 'RG']
}

let JP: Guitarist = {
    name: "Jimmy",
    active: true,
    albums: ['I', 'II', 'ROV']
}


const greetGuitarist = (guitarist: Guitarist)=>{
    if(guitarist.name){
        return `Hello ${guitarist.name.toUpperCase()}`
    }

    return 'Hello!'
}

console.log(greetGuitarist(JP))

// Enums
// You must be the change you wish to see in the world.

enum Grade {
    U = 1, // Assigned to 1 if not it will be 0
    D,
    C,
    B,
    A
}

console.log(Grade.U)
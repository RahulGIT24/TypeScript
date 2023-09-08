"use strict";
// Arrays and objects
let stringArray = ['one', 'two', 'three'];
let guitars = ['old', 'new', 'strat', 5150];
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
let brands = [];
// Invalid
// brands.push(23); // Only strings are allowed
// Valid
brands.push('Rahul');
//* Tuple
let myTuple = ['Dave', 12, true];
// It's an array
let mixed = ['John', 1, false];
// Valid 
mixed = myTuple;
// Invalid
// myTuple = mixed;
// Objects
let myObj;
// We can assign it as an object
myObj = [];
const exampleObject = {
    prop1: 'Dave',
    prop2: true
};
let evh = {
    name: "Rahul",
    active: false,
    albums: [1867, 5150, 'RG']
};
let JP = {
    name: "Jimmy",
    active: true,
    albums: ['I', 'II', 'ROV']
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(JP));
// Enums
// You must be the change you wish to see in the world.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);

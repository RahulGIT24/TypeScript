"use strict";
let firstName = "Rahul";
let firstName1 = "Rahul";
const json = JSON.parse("88");
console.log(typeof json);
let u = true;
let a = true;
a = 90;
a = "String";
function invokeme(callback) {
    callback();
}
function invokeme1(callback) {
    if (typeof callback === 'function') {
        callback();
    }
    console.log(callback);
}
invokeme1(add(2, 3));
function add(a, b) {
    return a + b;
}
let x1;
let z = undefined;
let y = null;
const names = [];
names.push("Rahul");
const names1 = ["Rahul"];
const numbers = [1, 2, 3, 4];
numbers.push(5);
let head = numbers[0];
console.log(head);
let ourTup;
ourTup = [12, "Rahul", true];
ourTup.push("OMG");
let ourTup1 = [12, "Rahul", true];
const graph = [12, 34];
const graph1 = [13, 2];
const [k, l] = graph1;
console.log(k, l);
const obj1 = {
    name: "Rahul",
    age: 12,
    YOB: 2006
};
obj1.YOB = 900;
const car1 = {
    name: "Toyota",
};
console.log(car1.name);
console.log(car1.mileage);
var directions;
(function (directions) {
    directions[directions["North"] = 0] = "North";
    directions[directions["east"] = 1] = "east";
    directions[directions["west"] = 2] = "west";
    directions[directions["south"] = 3] = "south";
})(directions || (directions = {}));
console.log(directions.North, directions.east, directions.west, directions.south);
var directions1;
(function (directions1) {
    directions1[directions1["North"] = 1] = "North";
    directions1[directions1["east"] = 2] = "east";
    directions1[directions1["west"] = 3] = "west";
    directions1[directions1["south"] = 4] = "south";
})(directions1 || (directions1 = {}));
console.log(directions1.North, directions1.east, directions1.west, directions1.south);
var statusCodes;
(function (statusCodes) {
    statusCodes[statusCodes["ok"] = 200] = "ok";
    statusCodes[statusCodes["server_error"] = 500] = "server_error";
    statusCodes[statusCodes["not_found"] = 404] = "not_found";
    statusCodes[statusCodes["client_error"] = 400] = "client_error";
})(statusCodes || (statusCodes = {}));
console.log(statusCodes.ok, statusCodes.server_error, statusCodes.not_found, statusCodes.client_error);
var directions2;
(function (directions2) {
    directions2["North"] = "North";
    directions2["east"] = "east";
    directions2["west"] = "west";
    directions2["south"] = "south";
})(directions2 || (directions2 = {}));
console.log(directions2.North, directions2.east, directions2.west, directions2.south);
const carYear = 2006;
const carType = "XUV";
const carModel = "Toyota";
const car = {
    year: carYear,
    type: carType,
    model: carModel
};
const rectangle = {
    height: 12,
    width: 8
};
const rectangle1 = {
    height: 12,
    width: 8,
    color: 'red'
};
function printStatusCode(code) {
    console.log(code);
}
printStatusCode(400);
printStatusCode('400');
function printStatusCode1(code) {
    if (typeof code === "string") {
        console.log(code.toUpperCase());
        return;
    }
    console.log(code);
}
printStatusCode1(400);
printStatusCode1("Rahul");
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
const greet = () => {
    console.log("hello");
};
const product = (a, b) => {
    return a * b;
};
console.log(product(5, 5));
const ADD = (a, b, c) => {
    return a + b + (c || 0);
};
console.log(ADD(2, 3, 90));
const ADD1 = (a, b, c = 12) => {
    return a + b + c;
};
console.log(ADD1(2, 3, 45));
function Add(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(Add(12, 34, 1, 2, 3, 4));
const negFunc = (value) => value - 1;
console.log(negFunc(9));
let x = 'hello';
console.log(x.length);
let y1 = 12;
console.log(y1.length);
let x2 = 'hello';
console.log(x.length);
let z1 = 'hello';
console.log(z1);
function printPersonProperty(person, property) {
    console.log(`The ${property} of person is ${person[property]}`);
}
let person11 = {
    name: "Rahul",
    age: 18
};
printPersonProperty(person11, "name");

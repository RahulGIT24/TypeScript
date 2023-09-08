"use strict";
// Literal Types
let myName;
// myName = 'Johon'; // Invalid
let userName;
userName = 'Amy'; // Valid
// Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('HI');
logMsg(add(2, 4));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction { (a: number, d: number): number;
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 3));
// Optional Parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// Default Parameters
const sumALl = (a = 9, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(3, 19));
logMsg(sumALl(undefined, 3));
// Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100) {
            break;
        }
    }
};
// Custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// Use of never typr
const numberOrString = (value) => {
    if (typeof value === "string") {
        return 'string';
    }
    if (typeof value === "number") {
        return 'number';
    }
    return createError("This should never happen!");
};

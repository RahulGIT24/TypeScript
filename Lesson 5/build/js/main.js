"use strict";
// convert to more or less specific
let a = 'Hello';
let b = a; // less specific
let c = a; // more specific
let d = 'world';
let e = 'make';
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return "" + a + b;
};
let myVal = addOrConcat(2, 3, 'concat');
// Be careful! TS sees no problem - but a string is returned
let myVal1 = addOrConcat(2, 3, 'concat');
// THE DOM
const img = document.querySelector('img');
const myimg = document.getElementById('#img');
img.src;
myimg.src;

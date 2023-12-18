"use strict";
const stringEcho = (arg) => arg;
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "Rahul" }));
console.log(isObj(null));
function createPairs(v1, v2) {
    return [v1, v2];
}
console.log(createPairs('12', 89));
class NamedValue {
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name} : ${this._value}`;
    }
}
const new_class = new NamedValue("New Name");
new_class.setValue(20);
console.log(new_class.getValue());
console.log(new_class.toString());
const wrappedValue = {
    value: 10
};
const wrapped = {
    value: '10'
};
console.log(wrapped.value);
function createLoggedPairs(v1, v2) {
    console.log(`Created Pair ${v1} and ${v2}`);
    return [v1, v2];
}
console.log(createLoggedPairs(11, 'Rahul'));
console.log(createLoggedPairs(11, 12));

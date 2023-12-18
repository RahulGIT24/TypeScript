// Type alias
type StringOrNumber = string | number
type StringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: StringOrNumberArray
}

type userId = StringOrNumber;

// Literal Types
let myName: 'Rahul'
// myName = 'Johon'; // Invalid

let userName: 'Dave' | 'John' | 'Amy'
userName = 'Amy' // Valid

// Functions
const add = (a: number, b: number): number => {
    return a + b;
}

const logMsg = (message: any): void => {
    console.log(message);
}

logMsg('HI');
logMsg(add(2, 4));

let subtract = function (c: number, d: number): number {
    return c - d;
}

type mathFunction = (a: number, d: number) => number;
// interface mathFunction { (a: number, d: number): number;
// }

let multiply: mathFunction = function (c, d) {
    return c * d;
}

logMsg(multiply(2, 3));

// Optional Parameters
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
}

// Default Parameters
const sumALl = (a: number = 9, b: number, c: number = 2): number => {
    return a + b + c;
}

logMsg(addAll(3, 19));
logMsg(sumALl(undefined, 3));

// Rest Parameters
const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1, 2, 3, 4));

const createError = (errMsg: string): never => {
    throw new Error(errMsg);
}

const infinite = () => {
    let i: number = 1;
    while (true) {
        i++;
        if (i > 100) {
            break;
        }
    }
}

// Custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === "number" ? true : false;
}

// Use of never type
const numberOrString = (value: number | string): string => {
    if (typeof value === "string") {
        return 'string';
    }
    if (typeof value === "number") {
        return 'number';
    }
    return createError("This should never happen!")
}
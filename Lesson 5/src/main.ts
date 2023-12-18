// Type Assestion
type One = string
type two = string | number
type three = 'Hello'

// convert to more or less specific
let a: One = 'Hello'
let b = a as two // less specific
let c = a as three // more specific

let d = <One>'world'
let e = <string | number>'make'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') {
        return a + b;
    }
    return "" + a + b;
}

let myVal: string = addOrConcat(2, 3, 'concat') as string;

// Be careful! TS sees no problem - but a string is returned
let myVal1: number = addOrConcat(2, 3, 'concat') as number;

// THE DOM
const img = document.querySelector('img')!
const myimg = document.getElementById('#img') as HTMLImageElement

img.src
myimg.src
let myName: string;
let meaningOfLife: number;
let isLoading: boolean;
let album: any;
let age: number | string; // Union type can support string and number

myName = 'rahul';
meaningOfLife = 43;
isLoading = true;
age = 12;
age = '12';

// Valid because it is of any datatype
album = 'new album';
album = 90;

const sum = (a: number, b: string) => {
    return a + b;
}

let postId: string | number;
let isActive: number | boolean | string;

let re: RegExp = /\w+/g;
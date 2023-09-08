"use strict";
class Coder {
    constructor(name, music, age, lang = 'English') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name;
        this.music;
        this.age;
        this.lang;
    }
    getAge() {
        return `Hello, I am ${this.age}`;
    }
}
const Dave = new Coder('Dave', 'Rock', 18);
console.log(Dave.getAge());
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev('Mac', 'Sara', 'Lofi', 45);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Rahul = new Guitarist('Rahul', 'Gitar');
console.log(Rahul.play('strums'));
/////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const dave = new Peeps('Dave');
const Steve = new Peeps('Steve');
console.log(Steve.id);
console.log(Peeps.count);
////////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(elem => typeof elem === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error("Param is not array of string");
        }
    }
}
const myBands = new Bands();
myBands.data = ['NEil', 'Justin', 'Rahul'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'Dave', 'BTS'];
console.log(myBands.data);

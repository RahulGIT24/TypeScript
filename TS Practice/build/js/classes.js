"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
const person = new Person("Jane");
console.log(person);
class Person1 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const p1 = new Person1("Rahul");
console.log(p1.getName());
class Person3 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const p2 = new Person3("Amit");
console.log(p2.getName());
class Person4 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const p4 = new Person4("Jane");
console.log(p4.getName());
class Rect {
    constructor(height1, width1) {
        this.height1 = height1;
        this.width1 = width1;
    }
    getArea() {
        return this.height1 * this.width1;
    }
    ;
}
const area = new Rect(4, 5);
console.log(area.getArea());
class Rec {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}
class Square extends Rec {
    constructor(width) {
        super(width, width);
    }
}
const mySq = new Square(20);
console.log(mySq.getArea());
class TextT {
    constructor(height) {
        this.height = height;
    }
    getText() {
        return `Hi + ${this.height}`;
    }
}
class Text2 extends TextT {
    constructor(width) {
        super(width);
        this.width = width;
    }
    getText() {
        return `Hello ${this.height}`;
    }
}
const mysq = new Text2(12);
console.log(mysq.getText());

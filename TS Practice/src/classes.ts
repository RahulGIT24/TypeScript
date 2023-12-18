// Members: Types
// Members of class are typed using type annotations, similar to variables

class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const person = new Person("Jane");

console.log(person);

// Members visibility

// There are three main visibility modifiers in TypeScript.

// public - (default) allows access to the class member from anywhere

// private - only allows access to the class member from within the class

// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

class Person1 {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const p1 = new Person1("Rahul");
console.log(p1.getName());

// Parameter Properties
// We can add visibility in parameters also
// We can define class members in constructors by adding visibility

class Person3 {
    public constructor(private name: string) { }

    public getName(): string {
        return this.name;
    }
}

const p2 = new Person3("Amit");
console.log(p2.getName())

// Readonly -> Prevents class members to get modified

class Person4 {
    private readonly name: string;

    constructor(name: string) {
        // name can't be changed after this initial declaration
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    // public ModifyName(new_name:string):void{
    //     this.name = new_name; // error
    // }
}

const p4 = new Person4("Jane");
console.log(p4.getName());

// Inheritance Implements

interface Shape {
    getArea: () => number;
}

class Rect implements Shape{
    public constructor(protected readonly height1: number,protected readonly width1:number){}

    public getArea(): number{
        return this.height1 * this.width1
    };
}

const area = new Rect(4,5);
console.log(area.getArea())

// Inheritance Extends -> Classes extends each other through extends keyword

interface sh{
    getArea:() => number;
}

class Rec implements sh{
    public constructor(protected readonly height:number,protected readonly width:number){}

    public getArea():number{
        return this.height * this.width;
    }
}

class Square extends Rec{
    public constructor(width:number){
        super(width,width);
    }
    // getAreat gets inherited from rectangle
}

const mySq = new Square(20);
console.log(mySq.getArea());

// Override
// When a class extends another class, it can replace the members of parent class with same name
class TextT{
    public constructor(protected readonly height:number){}

    public getText():string{
        return `Hi + ${this.height}`;
    }
}

class Text2 extends TextT{

    public constructor(protected readonly width:number){
        super(width);
    }

    override getText(): string {
        return `Hello ${this.height}`;
    }
}

const mysq = new Text2(12);
console.log(mysq.getText());
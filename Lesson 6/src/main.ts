class Coder {

    secondLang!: string

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'English'
    ) {
        this.name
        this.music
        this.age
        this.lang
    }

    public getAge() {
        return `Hello, I am ${this.age}`
    }
}

const Dave = new Coder('Dave', 'Rock', 18);
console.log(Dave.getAge())

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}`
    }
}

const Sara = new WebDev('Mac', 'Sara', 'Lofi', 45)

console.log(Sara.getLang())
// console.log(Sara.age) Private
// console.log(Sara.lang) Protected

//////////////////////////////////////////////

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Rahul = new Guitarist('Rahul', 'Gitar')
console.log(Rahul.play('strums'))

/////////////////////////////////////////////////////
class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count;
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const dave = new Peeps('Dave')
const Steve = new Peeps('Steve')

console.log(Steve.id)
console.log(Peeps.count)

////////////////////////////////////////////////////
class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(elem => typeof elem === 'string')) {
            this.dataState = value;
            return
        } else {
            throw new Error("Param is not array of string")
        }
    }
}

const myBands = new Bands();
myBands.data = ['NEil','Justin','Rahul']

console.log(myBands.data)

myBands.data = [...myBands.data,'Dave','BTS']

console.log(myBands.data)
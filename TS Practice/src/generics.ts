// Generics
// Works only for string
const stringEcho = (arg: string): string => arg;

// Can work with any data type variable
const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
};

console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "Rahul" }));
console.log(isObj(null));

function createPairs<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}

console.log(createPairs<string, number>('12', 89));

// Generic Classes
class NamedValue<T>{
    private _value: T | undefined;

    constructor(private name: string) { }

    public setValue(value: T) {
        this._value = value;
    }

    public getValue() {
        return this._value;
    }

    public toString() {
        return `${this.name} : ${this._value}`
    }
}

const new_class = new NamedValue("New Name")
new_class.setValue(20);
console.log(new_class.getValue())
console.log(new_class.toString())

// Type Aliases
// Generics in type aliases allow creating types that are more reusable
type Wrapper<T> = {
    value: T
};

const wrappedValue: Wrapper<number> = {
    value: 10
};

// Generics can be assined default values
type Wrapped<T = string> = {
    value: T;
}
// You haven't defined the type now you have to pass string value only 
const wrapped: Wrapped = {
    value: '10'
};
console.log(wrapped.value)

// Extends
// Can be added in generics to allowed whats in
function createLoggedPairs<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
    console.log(`Created Pair ${v1} and ${v2}`)
    return [v1, v2];
}

// console.log(createLoggedPairs(11,true)) // Error
console.log(createLoggedPairs(11, 'Rahul')) 
console.log(createLoggedPairs(11, 12)) 
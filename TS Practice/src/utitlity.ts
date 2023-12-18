// Utility Types -> Helps in manipulation

// Some utility types
// Partial
interface circle {
    radius: number
}

const area1: Partial<circle> = {};
area1.radius = 12;

// Required -> Changes all object properties to required

interface newCar {
    make: string;
    model: string;
    mileage?: number;
};

const mycar: Required<newCar> = {
    make: "Metal",
    model: "Maruti",
    mileage: 12
}

// Record is a shortcut to define an object with a specific key type and value type
const nameAgeMap: Record<string, number> = {
    'Alice': 23,
    'Jack': 12
};

console.log(nameAgeMap)

// Omit -> Remove keys from objects
interface Person {
    name: string,
    age: number,
    location?: string
};

const bob: Omit<Person, 'age' | 'location'> = {
    name: "Rahul"
    // Age and location omitted can't be defined here
}

// Pick -> Removes all object keys but kept a specific one
const jane: Pick<Person, 'name'> = {
    name: "Rahul"
    // Pick has only kept name, so age and location were removed
}

// Exclude -> Removes type from a union
type Primitive = string | number | boolean;

// Error number is excluded
// const value1: Exclude<Primitive, number> = 12;

const value: Exclude<Primitive, number> = '12';

// Return Type -> Extracts the return type of a function type
type PointGenerator = () => { x: number, y: number };

const point: ReturnType<PointGenerator> = {
    x: 12,
    y: 90
}

// Readonly 
// Used to create a new type where all properties are readonly
const rahul: Readonly<Person> = {
    name: "Rahul",
    age: 17
}

// Error a readonly property
// rahul.age = 90;
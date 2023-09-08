// Index Signatures

interface TransactioObj {
    readonly [index: string]: number
    Pizza: number,
    Books: number,
    Job: number
}

// interface TransactioObj{
//     readonly [index: string]: number
// }

const todaysTranscations: TransactioObj = {
    Pizza: -10,
    Books: -6,
    Job: 50,
    Sting: 40
}

console.log(todaysTranscations.Pizza)
console.log(todaysTranscations['Pizza'])

let prop: string = 'Pizza'
console.log(todaysTranscations[prop])

const todaysNet = (transactions: TransactioObj): number => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }

    return total;
}

console.log(todaysNet(todaysTranscations))

// todaysTranscations.Pizza = 49;
console.log(todaysTranscations['Dave'])

/////////////////////////////////////////////

interface Student {
    // [key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: 'Dave',
    GPA: 4.6,
    classes: [100,200]
}

// console.log(student.test)

// for(const key in student){
//     console.log(`${key} : ${student[key as keyof Student]}`)
// }

Object.keys(student).map(key=>{
    console.log(student[key as keyof typeof student])
})

const logStudentKey = (student: Student, key:keyof Student):void =>{
    console.log(`${key} : ${student[key]}`)
}

logStudentKey(student, 'name')

///////////////////////////////////////////////////
interface Incomes {
    [key: string]: number
}

type Streams = 'salary' | 'bonus' | 'side hustle'

type Income = Record<Streams, number>

const monthlyIncome: Income = {
    salary: 500,
    bonus: 100,
    "side hustle": 200
}

for(const revenue in monthlyIncome){
    console.log(monthlyIncome[revenue as keyof Income])
}
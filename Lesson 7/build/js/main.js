"use strict";
// Index Signatures
// interface TransactioObj{
//     readonly [index: string]: number
// }
const todaysTranscations = {
    Pizza: -10,
    Books: -6,
    Job: 50,
    Sting: 40
};
console.log(todaysTranscations.Pizza);
console.log(todaysTranscations['Pizza']);
let prop = 'Pizza';
console.log(todaysTranscations[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTranscations));
// todaysTranscations.Pizza = 49;
console.log(todaysTranscations['Dave']);
const student = {
    name: 'Dave',
    GPA: 4.6,
    classes: [100, 200]
};
// console.log(student.test)
// for(const key in student){
//     console.log(`${key} : ${student[key as keyof Student]}`)
// }
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`${key} : ${student[key]}`);
};
logStudentKey(student, 'name');
const monthlyIncome = {
    salary: 500,
    bonus: 100,
    "side hustle": 200
};
for (const revenue in monthlyIncome) {
    console.log(monthlyIncome[revenue]);
}

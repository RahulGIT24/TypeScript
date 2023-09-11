// Utility Types

// Partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate }
}

const assign1: Assignment = {
    studentId: "Rahul24",
    title: "Final Project",
    grade: 0
}

console.log(updateAssignment(assign1, { grade: 95 }))

const assignGrade: Assignment = updateAssignment(assign1, { grade: 95 })

// Required and readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database
    return assign
}

const assignVerified: Readonly<Assignment> = {
    ...assignGrade, verified: true
}

recordAssignment({ ...assignGrade, verified: true })

// Record
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
}

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "U"
}

interface Grades {
    assign: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign: 85, assign2: 93 },
    Kelly: { assign: 35, assign2: 13 },
}

// Pick and omit
type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: "k123",
    grade: 86
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
    studentId: 'k123',
    title: 'prohecs',
}

// Exclude and Extract
type adjustedGrade = Exclude<LetterGrades, "U">

type highGrades = Extract<LetterGrades, "A" | "B">

// Nonullable

type AllPossibleGrades = 'Dave' | 'John' | null | undefined

type NamesOnly = NonNullable<AllPossibleGrades>

// ReturnType

// type newAssign = { title: string, points: number }

const createnewAssign = (title: string, points: number, name: string) => {
    return { title, points, name }
}

type NewAssign = ReturnType<typeof createnewAssign>

const tsAssign: NewAssign = createnewAssign("Utility Types", 100, "Rahul")
console.log(tsAssign)

// Parameters

type AssignParams = Parameters<typeof createnewAssign>

const assignArgs: AssignParams = ['Generics', 100, "R"]

const tsAssign2: NewAssign = createnewAssign(...assignArgs)

console.log(tsAssign2)

// Awaited - helps us with return type of a promise

interface User {
    id:number,
    name:string,
    username:string,
    email:string
}

const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

console.log(fetchUsers())
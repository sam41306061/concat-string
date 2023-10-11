// primatives 
let age: number;

age = 12;

let userName: string;

userName = 'Sams4130'

let isInstructor: boolean;

isInstructor = false;

// complex types 
let hobbies: string[];
hobbies = ['Football', 'Basketball', 'Soccer'];

// object type defeniton
let person: {
    name: string;
    age: number;
}; 
person = {
    name: "Maxy",
    age: 32
}
//compination 
// let people: {
//     name: string;
//     age: number;
// }[];

people = [
    {name: 'John', age: 32},
    {name: 'Alex', age: 12},
    {name: 'Tammy',age: 40}
]

//type inference
let course = 'React - a course for life'
//course = 1,2,3,; this will generate an error
course = 'Hello world';

// union types 
let studentClass: string | number = 'Woodworking';

studentClass = 1234, 'Potery';

// type aliases
type Persons = {
    name: string;
    age: number;
}; 

let peps: Persons[];

let people: Persons;

// functions & types 
function add(a:number,b:number) {
    return a+b;
}

function printValue(value:string): number | any{
    console.log(value);
}

//generics
// util function
function insertAtBegining<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const  demoArray = [1,2,3];

const updatedArray = insertAtBegining(demoArray, -1); // -1,1,2,3 is output
const stringArray = insertAtBegining(['a','b','c','d'], 'e')

// updatedArray[0].split('');

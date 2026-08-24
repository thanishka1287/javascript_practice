let name = "Rahul";
console.log(`Hello ${name}`);     //output:Hello rahul

let name = "Rahul";
let age = 22;
let city = "Hyderabad";
console.log(
`Hello ${name}. You are ${age} years old and live in ${city}.`
);

//output:Hello Rahul.You are 22 years old and live in Hyderabad.

let name = "Rahul";
let age = 22;
console.log(`${name} is ${age} years old.`);   //output:Rahul is 22 years old.

let a = 10;
let b = 20;
console.log(`${a+b}`);                  //output:30

let x = 5;
console.log(`${x*x}`);                  //output:25

function greet(){
    return "Hello";
}
console.log(`${greet()}`);              //output:Hello

//Multi-line Strings
console.log(`Hello                    //output:Hello
Welcome                               //       Welcome
JavaScript`);                         //       JavaScript

let name = "Thanishka";
let college = "ACE Engineering College";
let cgpa = 9.0;
console.log(
`${name} studies at ${college} and has a CGPA of ${cgpa}.`
);
//output:Thanishka studies at Ace Engineering College and has a CGPA of 9.0.

let language = "JavaScript";
let year = 1995;
console.log(`${language} was created in ${year}`);

let age = 20;
console.log(`${age >= 18}`);   //output:true

let name = "rahul";
console.log(`${name.toUpperCase()}`);    //output:RAHUL

let fruits = ["Apple", "Banana", "Mango"];
console.log(`${fruits.length}`);          //output:3

console.log(`${Math.sqrt(64)}`);          //output:8

let name="rahul";
console.log(`Hello ${name.toUpperCase()}`);     //output:Hello RAHUL

let marks=95;
console.log(`Pass =${marks>=35}`);  //output:true

let nums=[10,20,30,40];
console.log(`Total elements = ${nums.length}`);    //output:Total elements=4

let name = "Thanishka";
let age = 20;
let college = "ACE Engineering College";
let branch = "CSE";
console.log(`Student Details                     //output:Student Details
    Name:${name}                                 //       Name:Thanishka
    Age:${age}                                   //       Age:20
    College:${college}                           //       College:ACE Engineering College
    Branch:${branch}`);                          //       Branch:CSE

let name = "Rahul";
let marks = 78;
console.log(`Student:${name}`);                       //output:Student: Rahul
console.log(`Marks:${marks}`);                        //       Marks: 78
console.log(`Result:${marks>=35 ? "Pass":"Fail"}`);   //       Result: Pass






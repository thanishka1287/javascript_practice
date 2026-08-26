//spread with arrays
let numbers=[10,20,30];
let newNumbers=[...numbers];
console.log(newNumbers);               //output:[10,20,30]

//adding elements while spreading
let numbers=[10,20,30];
let newNumbers=[5,...numbers,40];
console.log(newNumbers);              //output:[5,10,20,30,40]

let a=[10,20];
let b=[...a,30,40];
console.log(b);                     //output:[10,20,30,40]

//merge 2 arrays
let a=[1,2,3];
let b=[4,5,6];
let result=[...a,...b];
console.log(result);                //output:[1,2,3,4,5,6]

let x=[1,2];
let y=[3,4]; 
let z=[...x,...y];
console.log(z);                     //output:[1,2,3,4]

//copying an array
let original=[10,20,30];
let copy=[...original];
copy.push(40);
console.log(original);          //output:[10,20,30]
console.log(copy);              //       [10,20,30,40]

let fruits = ["Apple", "Banana", "Mango"];
let newFruits = [...fruits];
newFruits.push("Orange");
console.log(fruits);                //output:["Apple", "Banana", "Mango"]
console.log(newFruits);             //       [ "Apple", "Banana", "Mango", "Orange" ]

//adding values while copying
let original=[10,20,30];
let copy=[5,...original,40];
console.log(copy);                 //output:[5,10,20,30]

let a = [1, 2, 3];
let b = [0, ...a, 4, 5];
console.log(b);                     //output:[0,1,2,3,4,5]

//Spread with objects

let person={
    name:"Rahul",
    age:20
};
let newPerson={...person};
console.log(newPerson);            //output:{name:'Rahul',age:20}

//adding a new property
let person={
    name:"Rahul",
    age:20
};
let newPerson={...person,city:"Hyderabad"};
console.log(newPerson);                      //output:{name:'Rahul',age:20,city:'Hyderabad'}

let student = {
    name: "Thanishka",
    branch: "CSE"
};

let newStudent = {
    ...student,
    age: 20
};
console.log(newStudent);                 //output:{name: "Thanishka", branch: "CSE", age: 20}

//updating an object with spread
let student = {
    name: "Rahul",
    age: 20,
    city: "Hyderabad"
};
let updatedStudent = {
    ...student,
    age: 21
};
console.log(updatedStudent);             //output:{name:"Rahul",age:21,city:"Hyderabad"}

let person = {
    name: "Aman",
    age: 20
};
let updatedPerson = {
    age: 25,
    ...person
};
console.log(updatedPerson);              //output:{name:"Aman",age:20}

//merging objects
let person = {
    name: "Rahul"
};
let details = {
    age: 20,
    city: "Hyderabad"
};
let result = {                               //output:{name:"Rahul",age:20,city:"Hyderabad"}
    ...person,
    ...details
};
console.log(result);

let a = {
    name: "Rahul",
    age: 20
};
let b = {
    age: 25,
    city: "Hyderabad"
};
let result = {
    ...a,
    ...b
};
console.log(result);                     //output:{name:"Rahul",age:25,city:"Hyderabad"}

//spread with function arguments
function add(a, b, c) {
    return a + b + c;
}
let numbers = [10, 20, 30];
console.log(add(...numbers));         //output:60

function multiply(a, b, c) {
    return a * b * c;
}
let numbers = [2, 3, 4];
console.log(multiply(...numbers));  //output:24


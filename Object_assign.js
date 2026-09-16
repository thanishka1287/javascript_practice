//copy an object
let person = {
    name: "Rahul",
    age: 20
};
let copy = Object.assign({}, person);
console.log(copy);

//output
//{
//    name: "Rahul",
//   age: 20
//}


//Merge objects
let a = {
    name: "Rahul"
};
let b = {
    age: 20,
    city: "Hyderabad"
};
let result = Object.assign({}, a, b);
console.log(result);

//output
//{
//    name: "Rahul",
//    age: 20,
//    city: "Hyderabad"
//}


//Updating a property
let student = {
    name: "Rahul",
    age: 20
};
let updated = Object.assign({}, student, {
    age: 21
});
console.log(updated);

//output:
//{
//    name: "Rahul",
//    age: 21
//
//}


let a = {
    name: "Aman",
    age: 20
};
let b = {
    city: "Hyderabad"
};
let result = Object.assign({}, a, b);
console.log(result);
//output:
//{
//    name:"Aman",
//    age:20,
//    city:"Hyderabad"
//}
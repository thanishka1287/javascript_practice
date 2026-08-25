let numbers = [10, 20, 30];
let [a, b, c] = numbers;
console.log(a);      //output:10
console.log(b);      //       20
console.log(c);      //       30

//skipping values
let fruits = ["Apple", "Banana", "Mango"];
let [first, , third] = fruits;
console.log(first);      //output:Apple
console.log(third);      //       Mango

let numbers = [100, 200];
let [a, b, c = 300] = numbers;
console.log(c);            //output:300

let person = {
    name: "Thanishka",
    age: 20,
    city: "Hyderabad"
};
let { name, age, city } = person; 
console.log(name);                 //output:Thanishka
console.log(age);                  //        20
console.log(city);                 //        Hyderabad

let numbers=[10,20];
let[a,b,c]=numbers;
console.log(c);               //output:undefined

//swapping variables
let a=10;
let b=20;                    //output:20
[a,b]=[b,a];                 //       10

//Object destructing
let student={
      name:"Rahul",
      age:20
};                              //output:20
let{age,name}=student;          //       Rahul

let student={
    name:"Rahul",
    age:21,
    course:"JavaScript",
};
let {
    name:studentName,
    age:studentAge,
    course:studentCourse,
}=student;
console.log(studentName);            //output:Rahul
console.log(studentAge);             //       21
console.log(studentCourse);          //       JavaScript

let person = {
    name: "Thanishka",
    city: "Hyderabad"
};
let {name:personName,
    city:personCity,
    age:personAge=20
};
console.log(personName);           //output:Thanishka
console.log(personCity);           //       Hyderabad
console.log(perosonAge);           //       20

//Nested Objects
let employee = {
    name: "Aman",
    company: {
        name: "Google",
        city: "Bangalore"
    }
};
let {
    name:employeeName,
    company:{
        name:companyName,
        city:companyCity,  
}
}=employee; 
console.log(employeeName);     //Aman
console.log(companyName);      //Google
console.log(companyCity);      //Banglore


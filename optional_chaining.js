let student={
    name:"Rahul",
    address:{
        city:"Hyderabad"
    }
};
console.log(student.address.city);         //output:Hyderabad

console.log(student.address?.city);        //output:Undefined

let person = {
    name: "Aman"
};
console.log(person.address?.city);      //output:Undefined


let student={
    name:"Rahul"
};
student.greet?.();              
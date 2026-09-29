{
    "name":"Thanishka",
    "age":20,
    "branch":"CSE"
};

{
    "students": [
        "Aman",
        "Rahul",
        "Thanishka"
    ]
};

//can contain objects inside arrays
{
    "students":[
        {
            "name":"Aman",
            "age":20
        }
        {
            "name":"Rahul",
            "age":21
        }
    ]
}


//JSON.stringfy()

let student={
    name:"Aman",
    age:20
};
let jsondata=JSON.stringify(student);
console.log(jsondata);       //output:{"name":"Aman,"age":20}

let user={
    name:"Rahul",
    age:20
};
let data=JSON.stringify(user);
console.log(typeof data);          //output:String

//JSON.parse()

let data='{"name":"Rahul","age":"20"}';
let user=JSON.parse(data);
console.log(user.name);             //output:Rahul

let data='{"name":"Aman","age":"20"}';
let user=JSON.parse(data);
console.log(user.age);             //output:20

//localStorage

let student={
    name:"thanishka",
    age:20
};
localStorage.setItem("student",JSON.stringify(student));
let data=localStorage.getItem("student");
console.log(typeof data);                //output:string

let student={
    name:"Thanishka",
    age:20
};
localStorage.setItem("student",JSON.stringify(student));
let data=localStorage.getItem("Student");
let result=JSON.parse(data);
console.log(result.name);                 //Thanishka


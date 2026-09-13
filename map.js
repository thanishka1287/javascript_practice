//creating a map
let student=new Map();

//adding values with set()
student.set("name","rahul");       
student.set("age",20);
student.set("city","Hyderabad");

//getting values with get
console.log(student.get("name"));    //Rahul
console.log(student.get("age"));     //20

//checking whether key exists
console.log(student.has("name"));    //true
console.log(student.has("course"));  //false

//removing a value
student.delete("age");

//no of entries
console.log(student.size);  //3

let student = new Map();
student.set("name", "Thanishka");
student.set("age", 20);
console.log(student.get("name"));     //Thanishka
console.log(student.has("age"));      //true
console.log(student.size);            //2


let fruits = new Map();
fruits.set("a", "Apple");
fruits.set("b", "Banana");
console.log(fruits.get("a"));     //Apple
console.log(fruits.has("c"));     //false
console.log(fruits.size);         //2


//looping
let fruits = new Map();
fruits.set("a", "Apple");
fruits.set("b", "Banana");
for (let [key, value] of fruits) {     //a Apple
    console.log(key, value);           //b Banana
}






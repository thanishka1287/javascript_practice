class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let student1 = new Student("Thanishka", 20);
let student2 = new Student("Rahul", 21);
console.log(student1.name);                      //output:Thanishka
console.log(student2.name);                      //output:Rahul


class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let student = new Student("Rahul", 20);
console.log(student.age);                     //output:20


//Methods inside classes

class Student{
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log("Hello"+this.name);
    }
}
let student=new Student("Thanishka");
student.greet();                           //output:Hello Thanishka


class Student {
    constructor(name) {
        this.name = name;
    }
    introduce() {
        console.log("My name is " + this.name);
    }
}
let student = new Student("Rahul");
student.introduce();                     //output:My name is Rahul


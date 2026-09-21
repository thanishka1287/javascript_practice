class Person{
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log("Hello"+this.name);
    }
}
let Person=new Person("guys"); 
Person.greet();                        //output:Hello guys


class Person{
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log("Hello"+this.name);
    }
}
class Student extends Person{

}
let student=new Student("Thanishka");
Student.greet();                         //output:Hello Thanishka


class Animal {
    eat() {
        console.log("Animal is eating");
    }
}
class Dog extends Animal {

}
let dog = new Dog();
dog.eat();                              //output:Animal is eating


class Person{
    constructor(name){
        this.name=name;
    }
}
class Student extends Person{
    constructor(name,branch){
        super(name);
        this.branch=branch;
    }
}
let student=new Student("Thanishka","CSE");
console.log(student.name);                             //output:Thanishka
console.log(student.branch);                           //CSE



class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}
let dog = new Dog("Rio", "Golden Retriever");
console.log(dog.name);                                  //output:Rio
console.log(dog.breed);                                 //Golden Retriever





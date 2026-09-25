class Triangle{
    shapes(){
        console.log("I have 3 sides");
    }
}
class Circle extends Triangle{
    shapes(){
        console.log("I have no sides");
    }
}
class Square extends Triangle{
    shapes(){
        console.log("I have 4 equal sides");
    }
}
let circle=new Circle();
let square=new Square();
circle.shapes();                   //output:I have no sides
square.shapes();                   //       I have 3 sides


class Animal {
    speak() {
        console.log("Animal");
    }
}
class Dog extends Animal {
    speak() {
        console.log("Bark");
    }
}
class Cat extends Animal {
    speak() {
        console.log("Meow");
    }
}
let animals = [new Dog(), new Cat()];
for (let animal of animals) {
    animal.speak();                        //output:Bark
}                                          //       Meow
class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}
let dog = new Dog();
dog.sound();              //output:Dog barks



class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}
let dog = new Dog();
dog.sound();                         //output:Dog barks



class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}
class Cat extends Animal {
    sound() {
        console.log("Cat meows");
    }
}
let dog = new Dog();
let cat = new Cat();
dog.sound();                          //output:Dog barks
cat.sound();                          //       Cat Meows


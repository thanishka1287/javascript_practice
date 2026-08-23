function greet(name) {
    console.log(`Hello ${name}`);
}

greet("Rahul");           //output:Hello Rahul


function greet(name) {
    console.log(`Hello ${name}`);
}

greet();                  //output:Hello Undefined


function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}                                   //output:Hello Guest


function add(a, b = 10) {
    return a + b;
}

console.log(add(5));                 //output:15

function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet();                            //output:Hello Guest
greet("Rahul");                     //       Hello Rahul


function calculate(price, tax = 10) {
    return price + tax;
}
console.log(calculate(100));       //output:110
console.log(calculate(100, 20));   //       120



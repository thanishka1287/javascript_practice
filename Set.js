//creating a set
let numbers=new Set();

//adding values
numbers.add(10);       //10
numbers.add(20);       //20 
numbers.add(30);       //30

//duplicate values
numbers.add(10);
numbers.add(20);
numbers.add(10);
numbers.add(30);
numbers.add(20);
console.log(numbers);    //{10 ,20 ,30}

//check if value exists
console.log(numbers.has(20));     //true
console.log(numbers.has(50));     //false

//delete value
numbers.delete(20);

//size
console.log(numbers.size);     //3


let fruits = new Set();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Apple");
fruits.add("Mango");
fruits.add("Banana");
console.log(fruits.size);               //3
console.log(fruits.has("Mango"));       //true
console.log(fruits.has("Orange"));      //false
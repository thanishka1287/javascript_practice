function sayHi(){
    console.log("Hi");
}
sayHi();
sayHi();

//output:Hi
//       Hi


function welcome(){
    console.log("Welcome"); //output:Nothing because it is not called 
}


function first(){
    console.log("first");  // output:Middle
}                          //        First
console.log("Middle");     //        Last
first();
console.log("Last")

function test(){
    console.log("JavaScript");   //output:JavaScript
}                                //       JavaScript
test();                          //       JavaScript
test();                          //       JavaScript
test();
test();


function show(city){
    console.log("city");        //output:Hyderabad
}                               //      Delhi
show("Hyderabad");
show("Delhi");

function welcome(name){
    console.log("Welcome"+name);  //Ouput:Welcome Ananya
}
welcome("Ananya");

function introduce(name,age){      //Output:Thanishka
    console.log(name);             //19
    console.log(age);
}
introduce("Thanishka",19);

function add(a,b){
    console.log(a+b);            //Output:30
}
add(10,20);

function student(name,branch){
    console.log(name);
    console.log(branch);
}
student("Thanishka",19);

function multiply(a,b){
    console.log(a*b);
}
multiply(6,7);    
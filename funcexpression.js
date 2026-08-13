let greet=function(){
    console.log("Hello");
}
greet();

//output:Hello

let add=function(a,b){
    return a+b;
};
console.log(add(2,3));

//output:5

let square=function(num){
    return num*num;
};
console.log(square(6));

//output:36

let welcome=function(name){
    return "Welcome"+name;
};
console.log(welcome("Thanishka"));

//output:Welcome Thanishka

greet();
let greet=function(){
    console.log("Hi");
}
//gives error as function is called before it is declared



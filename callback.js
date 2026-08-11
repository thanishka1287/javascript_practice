function greet(name){
    console.log("Hello"+name);
}
greet("Thanishka");



function greet(){
    console.log("Hello");
}
function execute(callback){
    callback();
}
execute(greet);      //output:Hello



function morning(){
    console.log("Good Morning");
}
function run(task){
    task();
}
run(morning);      //output:Good Morning



function greet(name){
    console.log("Hello"+name);
}
function process(callback){
    callback("Thanishka");
}
process(greet);        //output:Hello Thanishka

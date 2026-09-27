try {
    let x = y;
}
catch (error) {
    console.log("Something went wrong");
}                                             //output:Something went wrong
console.log("End");                           //       End


console.log("A");
try {
    let x = unknownVariable;
    console.log("B");
}
catch (error) {
    console.log("C");
}
console.log("D");                            //output:ACD


try {
    console.log("Hello");
}
catch (error) {
    console.log("Error");
}
console.log("Done");                      //output:Hello Done


//finally

try{
    console.log("Hello");
}
catch(error){
    console.log("Error");
}
finally{                                //output:Hello
    console.log("Finally");             //       Finally
}

//throw

let age=15;
try{
    if(age<18){
        throw new Error("You are not Eligible");
    }
    console.log("you can enter");
}
catch(error){
    console.log(error.message);
}                                             //output:You are not Eligible



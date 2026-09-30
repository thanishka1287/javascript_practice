console.log("A");
setTimeout(()=>{
    console.log("B")
},2000);
console.log("C");                //A -> C -> B

console.log("start");
setTimeout(()=>{
    console.log("Middle");
},0);
console.log("End");          //Start -> Middle -> End



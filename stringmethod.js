//length
let name="Thanishka";      //output:9
console.log(name.length);

//toUpperCase
let name="Thanishka";
console.log(name.toUpperCase());     //output:THAN

//toLowerCase
let name="ThAnisHka";
console.log(name.toLowercase());    //output:thanishka

//trim
let name="  Rahul  ";
console.log(name.trim());           //output:Rahul

//includes
let text="JavaScript";
console.log(text.includes("Script"));   //output:true
console.log(text.includes("Python"));   //output:false

//startsWith
let text="JavaScript";
console.log(text.startsWith("Java"));   //output:true

//endsWith
let text="JavaScript";
console.log(text.endsWith("Script"));    //output:true

//indexOf
let str="JavaScript";
console.log(str.indexOf("a"));         //output:1

//lastIndexOf
let str="JavaScript";
console.log(str.lastIndexOf("a"));     //output:3

//slice
let str="JavaScript";
console.log(str.slice(0,4));          //output:Java

//replace
let str="JavaScript";
console.log(str.replace("Java","Python"));      //output:I like Python

//replaceAll
let str="cat cat cat";
console.log(str.replaceAll("cat","dog"));    //output:dog dog dog

//charAt
let str="Java";
console.log(str.charAt(2));         //output:v

//split
let str="apple,banana,cherry";
console.log(str.split(","));      //output:["apple","banana","cherry"]


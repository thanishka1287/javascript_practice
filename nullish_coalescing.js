let name;
console.log(name??"Guest");            //output:Undefined

let name="Thanishka";
console.log(name??"Guest");            //output:Thanishka

let name="null";
console.log(name??"Guest");            //output:Guest

let marks = 0;
console.log(marks ?? 50);              //output:0


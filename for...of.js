let fruits=["apple","banana","cherry"];
for(let fruit in fruits){
    console.log(fruits[i]);
}
//output:apple
//       banana
//       cherry

let name="Rahul";
for(let char of name){
    console.log(char);
}
//output:R
//       a
//       h
//       u
//       l

let numbers = [10, 20, 30];               //ouptut:10
for (let num of numbers) {                //       20
    console.log(num);                     //       30
}


//for...in
let student={
    name:"Thanishka",
    age:20,
    city:"Hyd"
};                                       //output:name
for(let key in student){                 //       age
    console.log(key);                    //       city
}

for(let key in student){                //output:Thanishka
    console.log(student[key]);          //       20
}                                       //       Hyd



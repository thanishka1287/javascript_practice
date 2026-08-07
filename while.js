let i=1;
while(i<=5){
    console.log(i);
    i++;
}
//output:1
//       2
//       3
//       4
//       5

let i=5;
while(i>=1){
    console.log(i);
    i--;
}
//output:5
//       4
//       3
//       2
//       1

//print even numbers
let i=2;
while(i<=20){
    console.log(i);
    i=i+2;
}

//print odd numbers
let i=1;
while(i<=20){
    console.log(i);
    i=i+2;
}

//multiplication table of 7
let i=1;
while(i<=10){
    console.log(" 7 * " + i + " = " + (7 * i));
    i++;
}

//sum of first ten numbers
let i=1;
let sum=0;
while(i<=10){
    sum=sum+i;
    i++;
}
console.log(sum);

//powers of 2
let i=2;
while(i<=100){
    console.log(i);
    i*=2;
}

//using if inside while
let i=1;
while(i<=10){
    if(i % 2 == 0){
        console.log(i+ " is an even number");
    }
    i++;
}

//multiples of 9 
let i=1;
while(i<=10){
    console.log(9*i);
    i++;
}

//Print numbers from 20 down to 2, decreasing by 2.
let i=20;
while(i>=2){
    console.log(i);
    i-=2;
}

//sum of nos from 1 to 50
let i=1;
let sum=0;
while(i<=50){
    sum=sum+i;
    i++;
}
console.log(sum);

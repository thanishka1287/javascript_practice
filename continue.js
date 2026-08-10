for(let i =1;i<=5;i++){      //output:1
    if(i==3){                //       2
        continue;            //       4
    }                        //       5
    console.log(i);
}

for(let i=2;i<=10;i+=2){     //output:2
    if(i==6){                //       4
        continue;            //       8
    }                        //       10
    console.log(i);
}

for(let i=1;i<=10;i++){     //output:1
    if(i%2==0){             //       3
        continue;           //       5
    }                       //       7 
    console.log(i);         //       9
}
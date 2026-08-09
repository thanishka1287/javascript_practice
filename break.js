for(let i=1;i<=10;i++){      //output:1
    if(i==5){                //       2
        break;               //       3
    }                        //       4
    console.log(i);
}

for(let i =10;i>=1;i--){     //output:10
    if(i==7){                //        9
        break;               //        8
    }
    console.log(i);
}
     
let i=2;                    //output:2
while(i<=10){               //       4
    console.log(i);         //       6
    if(i==6){
        break;
    }
    i+=2;
}

let i=1;                   //output:1
while(i<=10){              //       2
    if(i%4==0){            //       3
        break;
    }
    console.log(i);
    i++;
}
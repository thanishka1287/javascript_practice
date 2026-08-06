//Patterns                           //output:*
for(let i =1;i<=5;i++){                    // *
    console.log("*");                      // *
}                                          // *
                                           // *


//pattern 2                          //output:*****
let stars="";
for(let i=1; i<=5; i++){
    stars=stars + "*";
}
console.log(stars);

//pattern3                            //output:*
let stars="";                         //       **
for(let i=1;i<=5;i++){                //       ***
    stars=stars + "*";                //       ****
    console.log(stars);               //       *****
}

//nested loops                        //output:*****
for(let i=1;i<=3;i++){                //       *****
    let stars="";                     //       *****
    for(let j=1;j<=5;j++){
        stars+=stars;
    }
    console.log(stars);
}

for(let i=1;i<=4;i++){               //output:****
    let stars="";                    //       ****
    for(let j=1;j<=4;j++){           //       ****
        stars+="*";                  //       ****
    }
    console.log(stars);
}
                       
for(let i=1;i<=5;i++){               //output:*
    let stars="";                    //       **
    for(let j=1;j<=i;j++){           //       ***
        stars=stars + "*";           //       ****
    }                                //       *****
    console.log(stars);               
}

for(let i=1;i<=5;i++){              //output:*****
    let stars="";                   //       ****
    for(let j=5;j>=i;j--){          //       ***
        stars+="*";                 //       **
    }                               //       *
    console.log(stars);
}

for(let i=1;i<=5;i++){              //output:1
    let number="";                  //       12
    for(let j=1;j<=i;j++){          //       123
        numbers+=j;                 //       1234
    }                               //       12345
    console.log(numbers);
}

for(let i=1;i<=5;i++){             //output:11111
    let numbers="";                //       22222
    for(let j=1;j<=5;j++){         //       33333
        numbers+=j;                //       44444
    }                              //       55555
    console.log(numbers);
}

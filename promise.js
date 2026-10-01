//operation is successfull
let promise = new Promise((resolve, reject) => {
    resolve("Success!");
}); 

//operation fails
let promise = new Promise((resolve, reject) => {
    reject("Something went wrong");
});

//.then()
let promise = new Promise((resolve, reject) => {
    resolve("Success!");
});
promise.then((result) => {
    console.log(result);           //Success
});

//.catch()
let promise = new Promise((resolve, reject) => {
    reject("Failed!");
});
promise.catch((error) => {
    console.log(error);               //Failed
});

let promise = new Promise((resolve, reject) => {
    resolve("Success");
});
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {                         //Success
        console.log("Finished");             // Finished
    });



    let promise = new Promise((resolve, reject) => {
    reject("Failed");
});
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {                              //Failed
        console.log("Done");                      //Done
    });
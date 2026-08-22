//Click Events
<button id="btn">Click Me</button>
let button=document.querySelector("#btn");
button.addEventListener("click",()=>{
    console.log("Button Clicked");
});                                        //output:Button clicked

let title=document.querySelector("#title");
let button=document.querySelector("#btn");    //output:before:Hello
button.addEventListener("click",()=>{         //after:Welcome
    title.innerText="Welcome";
});


let name=document.querySelector("#name");
let button=document.querySelector("#btn");
button.addEventListener("click",()=>{
    name.innerText="Thanishka";
    name.style.color="blue";
    name.style.fontSize="40px";
});

let status=document.querySelector("status");
let button=document.querySelector("#btn");
button.addEventListener("click",()=>{
    if(status.innerText=="OFF"){
        status.innerText="ON";
    }else{
        status.innerText="OFF";
    }
});

//Input Events  
 let input=document.querySelector("#name");        //user:Thanish
let output=document.querySelector("#output");     //output:Thanish
input.addEventListener("input",()=>{
    output.innerText=input.value;
});


let username=document.querySelector("#username");
let message=document.querySelector("#message");
username.addEventListener("input",()=>{
    message.innerText=username.value;
});

//Change Events

//JavaScript so that after the user finishes typing and clicks outside the textbox, the <h2> displays the city name.
let input=document.querySelector("#city");
let output=document.querySelector("#result");
input.addEventListener("change",()=>{
    output.innerText=input.value;
});



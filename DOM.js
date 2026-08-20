<h1 id="title">Hello</h1>
let heading=document.getElementById("title");
heading.innerText="Welcome";      
//before:Hello 
//after:Welcome

heading.style.color="red";
//text appears in red color

heading.style.fontSize="40px";

<h1 id="heading">JavaScript</h1>
let text=document.getElementById("heading");
text.innerText="DOM is awesome";
text.style.color="blue";

//querySelector-selects the first element that matches the specific CSS selector
<h2 id="example">Programming</h2>
let newexample=document.querySelector("#example");
newexample.innerText="Programming is fun";
newexample.style.color="green";

//querySelectorAll-selects all elements that match the specific CSS selector
<p>Apple</p>
<p>Banana</p>
let fruits=document.querySelectorAll("p");
fruits.forEach((fruit)=>
{
    console.log(fruit.innerText);
});
//output:Apple
//       Banana


<h1 id="title">Hello</h1>
let title=document.querySelector("h1");     
title.innerHTML="<i>Welcome</i>";         //output:Welcome(in italics)
title.innerText="<i>Welcome</i>";         //output:<i>Welcome</i>





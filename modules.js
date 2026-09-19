//exporting and importing

export const name="Thanishka";
import {name} from "./math.js";
console.log(name);     //output:Thanishka


export function add(a,b){
    return a+b;
}
export function subtract(a,b){
    return a-b;
}
import{add,subtract}from"./math.js";
console.log(add(10,5));                     //output:15
console.log(subtract(10,5));                //output:5


//default Export
export default function add(a,b){
    return a+b;
}
import add from".math.js";
// if
// else
// else if

const prompt=require("prompt-sync")();

let age = prompt("Whats your age: ")
console.log(typeof age)
age = Number.parseInt(age)
console.log(typeof age)
 if (age<18){
   console.log("chala ja")
 }
 else{
   console.log("aja aja")
 }

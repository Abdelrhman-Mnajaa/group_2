
//ahmed
/*
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name) {  
    console.log(`Hello ${name}`);   //using template literals to concatenate strings and variables
    
}
let named= prompt("Enter your name :");
greet(named);   

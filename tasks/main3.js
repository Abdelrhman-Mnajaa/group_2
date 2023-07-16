<<<<<<< HEAD
// Abd Sol

function calculateSupply(age,amountPerDay){
const maxAge=100;
    if (age<=maxAge && age >0){
        consumable=amountPerDay*(age*12*30);
        return consumable;}
        else
        return "Check Age entered";
    
}
console.log(calculateSupply(10,1));
=======
//idrees

/*
let n = prompt("Please enter your age and the ammount of every day, ex (age, ammount)");
n = n.split(",").map(Number);

function calculateSupply(){
    n[0] = (100 - n[0]) * 365 * n[1];
    console.log("You will need " + n[0] + " ammount to last you until the ripe old age of 100")
}
calculateSupply();
*/
// ahmed 

/*
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"
*/ 


function calculateSupply(age , amountPerDay ){
    const MAX_AGE =  100;
    let remainingDays=(MAX_AGE-age)*365  //remaining days
    let y=remainingDays*amountPerDay 
    console.log(`You will need ${y} to last you until the ripe old age of X`)
   // return `You will need ${Math.ceil((amountPerDay*remainingDays)/365)}`
}
let age1= Number(prompt("Enter your age :"))
let amountPerDay1=Number( prompt ("enter daily consumption:"))

calculateSupply(age1, amountPerDay1)
>>>>>>> e7d877a4a80c70fa3d8d6128cf071d42002dfc67

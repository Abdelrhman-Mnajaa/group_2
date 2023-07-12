<<<<<<< HEAD
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
=======
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
>>>>>>> b0f98440d71a52c571a4b567f0975480fbd2b4e8

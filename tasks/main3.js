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
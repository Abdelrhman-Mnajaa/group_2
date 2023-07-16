<<<<<<< HEAD
// 21
// Write a function called randomBetweenNumbers
// that takes 2 parameters
// and returns a random number between them
// ** hint: you can seacrh using MDN


function randomBetweenNumbers(min, max) { 
    // min and max included but not 
    return Math.floor(Math.random() * (max - min + 1) + min)

}

    const rndInt = randomBetweenNumbers(1, 6)
    console.log(rndInt)
    
    
=======
// idrees

/*
function randomBetweenNumbers(){
    let min = parseFloat(prompt("Enter the min number:"));
    let max = parseFloat(prompt("Enter the max number:"));
    console.log(Math.random() * (max - min) + min);   
}
randomBetweenNumbers();
*/
>>>>>>> e7d877a4a80c70fa3d8d6128cf071d42002dfc67

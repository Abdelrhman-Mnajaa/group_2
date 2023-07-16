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
    
    
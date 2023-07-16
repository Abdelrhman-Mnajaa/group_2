<<<<<<< HEAD
/*

22
Write a function called scoreInUniversty
that takes 1 parameters
and returns
the alpabet 
in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/


function scoreInUniversty(score){
    return score>=95 && score<=100 ? "A" : score>=85 && score<=94 ? "B" : score>=70 && score<=84 ? "C" : score>=50 && score<=69 ? "D" : score>=0 && score<=49 ? "F":"Wronge score" ;
}
console.log(scoreInUniversty(100));



=======
// idrees

/*
let n = parseFloat(prompt("Enter the number:"));

function scoreInUniversty(){
    switch(true){
        case n >= 95 && n <= 100:
            n = "A";
            break;
        case n >= 85 && n <= 94:
            n = "B";
            break;
        case n >= 70 && n <= 84:
            n = "C";
            break;
        case n >= 50 && n <= 69:
            n = "D";
            break;
        case n >= 0 && n <= 49:
            n = "F";
            break;
        default:
            n = "Invalid";
            break;
    }
}
scoreInUniversty();
console.log(n);
*/
>>>>>>> e7d877a4a80c70fa3d8d6128cf071d42002dfc67

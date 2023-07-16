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




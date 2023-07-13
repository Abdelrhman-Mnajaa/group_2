//AHMED
/*
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

*/
//Solution in JavaScript
/*
var arrs=[]
arrs[0] = prompt("Enter number 1:");
 arrs[1]= prompt("Enter number 2:");
 arrs[2]= prompt("Enter number 3:");
 arrs[3]= prompt("Enter number 4:");
 arrs[4]= prompt("Enter number 5:");


function shortestLength(str1, str2, str3 , str4 , str5) {
    str1=arrs[0]
    str2=arrs[1]
    str3=arrs[2]
    str4=arrs[3]
    str5=arrs[4]
    let smaller= str1
    for (var i = 1; i < arrs.length; i++){
        if (arrs[i].length < smaller.length)
            smaller= arrs[i]
        console.log(smaller)
    }  
}
shortestLength(arrs[0],arrs[1],arrs[2], arrs[3],arrs[4])
*/
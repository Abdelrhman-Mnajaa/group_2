//idrees

/*
let age = Number(prompt("Please enter your age"));

function canIGetADrivingLicense(){
    if( age >= 20 ){
        console.log("yes you can");
    }
    else{
        x = 20 - age;
        console.log("please come back after " + x + " years to get one");
    }
}
canIGetADrivingLicense();
*/



//AHMED
/*
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"


function canIGetADrivingLicense(age){
    if (age >= 20 ){
        return 'Yes, You Can'
        }else {
            let remainingYears=(20-age)
            return `You have ${remainingYears} more year/s until getting driving license`
    }
}
let x = Number(prompt("Enter your age :"))
console.log(canIGetADrivingLicense(x))
*/
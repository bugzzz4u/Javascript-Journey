//if else loop
let age = 19;
if(age>=18){
    console.log("User can play Valorant.");
}
else{
    console.log("User can't play Valorant.");
}
//Ternary operator/Conditional Operator
age = 8;
let drink = age >= 5?"coffee":"milk";
console.log(drink);

// and (&&) or(||) operator

// prompt is used for taking input

 let winningnumber = 19;
 let user_Guess = prompt("Guess a number:");
 console.log(typeof user_Guess);//string

 let userGuess = +prompt("Guess a number:");//to convert string to number
 console.log(typeof userGuess);//number
 if(userGuess === winningnumber){
     console.log("Your guess is right.");
 }
 else{
     if(userGuess<17){
     console.log("Your guess is too low");
     }else{
    console.log("Your guess is too high.");
    }
 }

//Switch 
let day = 2;
switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
}

//while loop
let i =0;
while(i<=3){
    console.log(i);
    i++;
}

//for loop 
for(let i =0; i<=9; i++){
    console.log(i);
}

//do while loop
i=10;
do{
    console.log(i);
    i++;
}while(i<=9);
console.log("value of i is", i);
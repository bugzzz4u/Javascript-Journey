//DATA TYPES (PRIMITIVE)
// string "harshit"
// number 2, 4
// Boolean
// undefined
// null
// BigInt
// Symbol

let age = 20;
let firstName = "Aravi"
console.log(typeof firstName);

// convert number to string
age = age + "";
console.log(typeof(age)); //"22"

//convert string to number
let myStr = + "34";
console.log(typeof myStr);

//ANOTHER METH
age = 19;
age =String(age);
console.log(typeof(age));
//viceversa for string to number

//concatenation of strings
let string1 = "Harsh";
let string2 = "it";
let fullName = string1 + string2;
console.log(fullName);

string1 = "17";
string2 = "10";
fullName = string1 + string2;//string value
console.log(fullName);

fullName = +string1 + +string2;//string to number
console.log(fullName);

//Template String
age = 20;
firstName = "Aravi";
let aboutMe = "My name is " + firstName + " and my age is " + age ;
console.log(aboutMe);
//another way to use this
aboutMe = `My name is ${firstName} and my age is ${age}.`;
console.log(aboutMe);

//Undefined is valid for let, char but invalid for constant.You'll need to assign a value to that.
let Name;
console.log(typeof(Name));

//Null
let myVariable= null;
console.log(typeof(myVariable));//bug, error[it is not an object but null only]

//BigInt
let mynumber = BigInt(123);//one way to declare 
let sameMyNumber = 12n//another way 
console.log(mynumber + sameMyNumber);

//booleans and comparison operator 
// == vs ===
let num1 = "7";
let num2= 7;
console.log(num1==num2);

num1 = "7";
num2= 7;
console.log(num1===num2);// === are used to check whether there is a difference in datatypes also.

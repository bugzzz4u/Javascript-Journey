//The following command is used to pin point errors in the code.
"use strict"
// console.log is used to print sth on console
console.log("hello world");

//declare a variable
 var firstName = "Anamika";
 console.log(firstName);
//case sensitive
//changing value
firstName="Arjun"
console.log(firstName);

//ways to declare a variable
//1value(invalid)   value1(valid)
//_firstname(valid)  first_name(valid) (snake case writing)
//first$name(valid)  $firstname(valid)
//first name (invalid)  firstName (valid) (camel case writing)

//let keyword has the same use as var but the difference lies in the scopes
//block scope vs function scope
let firstName = "Bharti";
firstName="Chhaya";
console.log(firstName);

//declare constants
const pi = 3.14;
console.log(pi);
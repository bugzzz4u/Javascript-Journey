//String indexing
let firstName = "Harshit";
// h a r s h i t
// 0 1 2 3 4 5 6

console.log(firstName[3]);
console.log(firstName.length);
console.log(firstName[firstName.length-2])

firstName="   Harshit   ";
console.log(firstName.length);
firstName=firstName.trim(); //"Harshit"
console.log(firstName);
console.log(firstName.length);

console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

let newString =firstName.slice(0,5); //harsh
console.log(newString);
newString =firstName.slice(1); //arshit
console.log(newString);
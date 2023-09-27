//primitive vs reference data types
//PRIMITIVE DATATYPE
let num1 = 6;
let num2 = num1;
console.log("Value of num1 is", num1);
console.log("Value of num2 is", num2);
num1++;
console.log("After increasing num1");
console.log("value is num1 is",num1);
console.log("Value is num2 is",num2);
//The values will be stored in the stack and changes will be made only on num1.

//REFERENCE TYPE
let array1= ["item1","item2"];
let array2= array1;
console.log("array1",array1);
console.log("array2", array2);
array1.push("item3");
console.log("After pushing element to array 1");
console.log("array1",array1);
console.log("array2", array2);
//The values are stored in heaps and their addresses are stored in the pointers in the stack which remains same even after making changes to the former array.Thereby, giving the dsame results.

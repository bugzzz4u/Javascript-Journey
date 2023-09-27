//array is an object
let fruits =["Apple","Banana","Mango"];
let obj = {}; //object literal
console.log(typeof fruits);

//to figure out whether an object is an array or not
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));

fruits.push("Grapes");//array is mutable
console.log(fruits);

let poppedFruit = fruits.pop();//deletes the last item and returns it
console.log(fruits);
console.log("Popped Fruit is", poppedFruit);

fruits.unshift("Watermelon");//used for adding item at the start
console.log(fruits);

let removedFruit = fruits.shift();//removes the item from the start and returns it just like pop
console.log(fruits);
console.log("Removed Fruit is", removedFruit);

//Push and Pop are faster than unshift and shift

 

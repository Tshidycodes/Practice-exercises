//Create a function that "claps" 5 times
/*
function clap(n) {
  for (let i = 0; i < n; i++) {
    //console.log("clap👋");
  }
}

clap(5);

//clap five times on a row:
function clapOnRow(n) {
  //initialine clapline with an empty string where the claps will be stored
  let clapLine = "";
  //lets say we want 3 claps
  //use for loop FROM 0 to n-1; APPEND "clap👋" to clap line
  for (let i = 0; i < n; i++) {
    clapLine += "👋";
  }
  //console.log(clapLine);
}
clapOnRow(5);

//How to loop through an array

let fruits = ["apple", "lemon", "pear"];
console.log(fruits[0]); //means get me an element at the zero index
//lets append:
let favouriteFruit = "";
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); //simply means first iter i= 0 therefore fruits[0]; then i= 1 therefore fruits[1]; then i = 2 so fruits[2]
  favouriteFruit += fruits[i] + " ";
  console.log(favouriteFruit);
}
*/

// FOR LOOP to run through an object because objects do not have indexes or order and are accessed through their properties:
/*
let data = { name: "John", age: 34, maritalStatus: true };
console.log(data["maritalStatus"]);
for (let element in data) {
  //console.log(element); //goes through all the properties
  console.log(element, data[element]);
}

//Nested Loops and 2-Dimentional  Arrays

let numberGrid = [[1, 2, 3], [4.5, 6], [7, 8, 9], [0]];
*/

//Looping through an array
let fruits = ["orange", "lemon", "apple"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
//Here is an alternative for that
for (let fruit of fruits) {
  console.log(fruit);
}
//this loop goes through the elements itselves and not the indices

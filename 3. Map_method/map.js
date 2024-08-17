//map iterates over each element and applies a function to every element
//function can be anything, can be an arrow function, anonymous function or just a regular function or
const nums = [4, 6, 7, 8, 9, 12, 16];

//find the square of each element: so need to pass a function that will be applied to every element.
const sqrts = nums.map(Math.sqrt);
const plusNum = nums.map((num) => num + 1);
const double = nums.map((num) => num * 2);
console.log(sqrts);
console.log(plusNum);
console.log(double);

const letters = ["x", "y", "z"];
const capitalized = letters.map((letter) => letter.toUpperCase());
console.log(capitalized);

const findIndexO = letters.map((letter, index) => index);
console.log(findIndexO);

//Reverse the provided string your results must be a string
//Function takes in one parameter.
//Function Purpose: has one parameter, takes in a string and reverses it
//Initialize a variable with an empty array/ stringfor storing letters that will be pushed
//split string into array containing strings
//loop through the index of the arr, start at the End (arr.length -1 ); End at zero index, decrement
//push the index values to our collector empty array
//change the array into a string

//First solution - using built in methods
//Reverse is a method for reversing an array

function reverseString(str) {
  let splitString = str.split(""); //converst string into an array, delimiter is empty
  console.log(splitString.reverse().join(""));
}
reverseString("Hello");

//Second solution with NO built in methods

function reverseWords(str1) {
  let reversedWord = "";
  for (let i = str1.length - 1; i >= 0; i--) {
    reversedWord += str1[i];
  }
  console.log(reversedWord.toLowerCase());
}
reverseWords("Family");

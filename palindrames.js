//return true if the given string is a palindrome.otherwise return false.
//a palindrome is a word or sentence that is spelled the same way both forward and backward, ignoring punctuation, case and spacing.
//function purpose - if a word or sentence is spelled same way both forward and in reverse, return true, or else return false
//Remove all non-alphabetic characters
//convert string into array
//reverse the array
//LOOP though index of first array FROM 0 to array.length -1, increment
//compare indices of the two arrays
//return true if they match, false if the forward array does not match the reverse array

function palindrome(str) {
  const reg = /[\W_]/g;

  let smallStr = str.toLowerCase().replace(reg, "");
  let reversed = smallStr.split("").reverse().join("");
  if (reversed === smallStr) return true;
  false;
}

palindrome("racecar");

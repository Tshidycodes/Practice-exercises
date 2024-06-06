/* Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
Note that inserting the the three dots to the end will add to the string length.
However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
*/
// function properties - Takes two arguments, the string and the length
//function purpose - Returns a truncated string with a ... if its length is greter than argument length
//Determine whether the string is longer than the given maximum length
//IF the str is longer, add ... to its ending if not, do not truncate
//RETURN the truncated str with ... ending

function struncatedString(str, num) {
  if (num >= str.length) return str;
  if (num <= 3) return str.slice(0, num) + "...";
  return str.slice(0, num - 3) + "...";
}
struncatedString("Hello my name is Tshidi.", 10);
//This is how splice works: if you want to cut something incude where to start and finish
//example: goes up to a certain index but does not return that index;

let name = "Matshidiso";
console.log(name.slice(2, 8));

/* Repeat a given string (first argument) nume times (second argument). Return an empty string if num is not a positive number.
 */
//Method One:
/*function repeatStringNumTimes(str, num) {
  if (num < 0) return "";
  return str.repeat(num);
}

repeatStringNumTimes("Hello", 2);
*/
//Method 2:
function repeatStringNumTimes(str, num) {
  let final = "";
  if (num < 0) return "";
  for (let i = 0; i < num; i++) {
    final += str;
  }
  return final;
}

repeatStringNumTimes("Hello", 2);

/* Truncate a tring(first argument) if it is longer than the maximum string length (second argument). Return the truncated string with a ... ending */

function truncateString(str, num) {
  if (str.length <= num) return str;
  else {
    return str.slice(0, num) + "...";
  }
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

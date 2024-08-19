/*Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

*/

function spinalCase(str) {
  return str.toLowerCase().replace(" ", "-");
}

console.log(spinalCase("This Is Spinal Tap"));

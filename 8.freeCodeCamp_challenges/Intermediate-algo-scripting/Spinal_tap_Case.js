/*Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

*/

function spinalCase(str) {
  function spinalCase(str) {
    // Replace low-upper case (camelCase) with a space between them, and then replace spaces/underscores with dashes
    return str
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert space between camelCase words
      .replace(/[\s_]+/g, "-") // Replace spaces and underscores with dashes
      .toLowerCase(); // Convert to lowercase
  }
}

console.log(spinalCase("This Is Spinal Tap"));

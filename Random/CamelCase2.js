/*
There is asequence of words in CamelCase as a string of letters, s, having the following properties: 1. It is a concatenation of one or more words consisting of englisg letters
2. All letters in the first word are lowercase
3. For each of the subsequent words, the first letter is uppercase and the rest of the letters are lowercase
*/
//Count the words!
//This code is wrong because of using string.includes(matchLetters[i]) inside a loop, which checks if the entire string contains the character at matchLetters[i] rather than checking the character at a specific index.

function camelCaseWords(string) {
  if (!string) {
    return "invalid input";
  }
  let matchLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let count = 1; //assumption that there is at least one letter
  for (let i = 0; i < string.length; i++) {
    if (string.includes(matchLetters[i])) {
      count++;
    }
  }
  return count;
}
console.log(camelCaseWords("whatNumberIsYours"));
console.log(camelCaseWords(""));

function countCamelCaseWords(string) {
  if (!string) {
    return "invalid input";
  }

  let count = 1; //assumption that there is at least one letter
  for (let i = 0; i < string.length; i++) {
    if (string[i] >= "A" && string[i] <= "Z") {
      count++;
    }
  }
  return count;
}
console.log(countCamelCaseWords("whatNumberIsYours"));
console.log(countCamelCaseWords(""));

function countNumbers(string) {
  if (!string) {
    return "invalid string";
  }
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] >= 0 && string[i] <= 9) {
      count++;
    }
  }
  return count;
}
console.log(countNumbers("count3kpak7jaks0mm1dg5"));

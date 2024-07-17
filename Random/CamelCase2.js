/*
There is asequence of words in CamelCase as a string of letters, s, having the following properties: 1. It is a concatenation of one or more words consisting of englisg letters
2. All letters in the first word are lowercase
3. For each of the subsequent words, the first letter is uppercase and the rest of the letters are lowercase
*/
//Count the words!

function camelCaseWords(string) {
  let matchLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let count = 1;
  for (let i = 0; i < string.length; i++) {
    if (string.includes(matchLetters[i])) {
      count++;
    }
  }
  return count;
}
console.log(camelCaseWords("whatNumberIsYourFavouriteTodayOrAnyDay"));

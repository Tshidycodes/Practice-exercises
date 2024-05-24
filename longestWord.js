//Return the longestWord in the provided sentence
//Your response should be a number

//Function purpose - finds the longest word in the string and reterns its length
//initialize a variable to an empty string
//Break up the strings into arrays
// loop through the individual words to compare their lengths
//Use if statement, if the length of the array currently being looped throgh is greater than the length of what is contained in the collector varable then replace what is in there with the current array
//return the value of the collector

function findLongestWord(str) {
  let longestWord = "";
  let words = str.split(" "); //split by space so we have an array of words
  for (let word of words) {
    if (word.length > longestWord.length) {
      //if the length of current word we looping though is greater than the longestWord
      longestWord = word; //make longestWord = word, = replace by word
    }
  }
  return longestWord.length;
}

findLongestWord("The quick brown fox jumped over to the lazy dog");

/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
*/

function disemvowel(str) {
  let result = "";
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}

disemvowel("This website is for losers LOL!");

//without Built in methods

function removeVowels(str) {
  let vowellessString = "";
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    let isVowel = false;
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        isVowel = true;
        break;
      }
    }
    if (!isVowel) {
      vowellessString += str[i];
    }
  }
  return vowellessString;
}
console.log(removeVowels("Hello"));

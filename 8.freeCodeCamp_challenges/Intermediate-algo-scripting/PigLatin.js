/* 
Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/
function translatePigLatin(str) {
  const vowels = "aeiou";

  if (vowels.includes(str[0])) {
    return str + "way";
  }

  const firstVowelIndex = str
    .split("")
    .findIndex((char) => vowels.includes(char));

  if (firstVowelIndex === -1) {
    return str + "ay";
  }

  return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + "ay";
}

translatePigLatin("consonant");

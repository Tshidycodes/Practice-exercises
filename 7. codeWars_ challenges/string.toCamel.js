/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str) {
  let camelCase = "";
  let capitalizeNextChar = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-" || str[i] === "_") {
      capitalizeNextChar = true; //when hyphen is encoutered, set the flag to capitalize the next cahracter
    } else {
      if (capitalizeNextChar) {
        camelCase += str[i].toUpperCase();
        capitalizeNextChar = false; //restart the flag
      } else {
        if (i === 0) {
          camelCase += str[i];
        } else {
          camelCase += str[i];
        }
      }
    }
  }
  return camelCase;
}

console.log(toCamelCase("The-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));

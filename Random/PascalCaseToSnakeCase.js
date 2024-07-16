/*Complete the function so that it takes a CamelCase string and returns the string in snake_case notation. Lowercase characters can be numbers. if the method gets a number as input. it should return a string.
"TestController" ---> "test_controller"
"MoviesAndBooks" --->"movies_and_books*/

function toUnderScore(string) {
  let result = "";
  if (string.length > 1) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] >= "0" && string[i] <= "9") {
        result += string[i].toString();
      } else if (string[i] === string[i].toUpperCase()) {
        result += "_";
        result += string[i].toLowerCase();
      } else {
        result += string[i];
      }
    }

    return result.substring(1); //substring(1) extracts the substring starting from the character at index 1 (which is "m") to the end of the string.
  }
  return string.toString();
}
console.log(toUnderScore("MoviesAndBooks"));

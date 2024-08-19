/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase. */
function titleCase(str) {
  let strArr = str.split(" ");
  console.log(strArr);
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] =
      strArr[i][0].toUpperCase() + strArr[i].toLowerCase().substring(1);
  }
  return strArr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));

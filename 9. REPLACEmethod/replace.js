//Syntax: string.replace(serchString, replaceString)
//replace blue with red

//convert string to array, split (" ")
function replaceWords(string) {
  let words = string.split(" ");
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    if (words[i] === "blue") {
      words[i] = "red";
    }
    if (words[i] === "Blue") {
      words[i] === "Red";
    }
  }
  return words.join(" ");
}
console.log(replaceWords("Mr Blue has a blue house and a blue car"));

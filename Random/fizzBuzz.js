/*
function stringChallenge(num) take num parameter being passed and return all the numbers from 1 to num separated by spaces, but replace every number that is divisible by 3 with the word “Fizz”, replace every number that is divisible by 5 with the word “Buzz” . If num is 3, then program should return the string “1 2 Fizz “. The input will be in the range 1-50
*/
function stringChallenge(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result.join(" ");
}
console.log(stringChallenge(6));

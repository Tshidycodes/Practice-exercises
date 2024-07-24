/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
*/
function highAndLow(numbers) {
  let stringArray = numbers.split(" ");
  /*let numberArray = [];
  for (let i = 0; i < stringArray.length; i++) {
    numberArray.push(Number(stringArray[i]));
  }
*/

  let maxNumber = Math.max(...stringArray);
  let minNumber = Math.min(...stringArray);
  return `${maxNumber} ${minNumber}`;
}

console.log(highAndLow("1 2 3 4 5"));

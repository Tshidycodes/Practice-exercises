/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
*/
function sortArray(array) {
  let oddNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddNumbers.push(array[i]);
    }
  }
  oddNumbers.sort((a, b) => a - b); //Sort the odd numbers in ascending order
  let resultArray = [];
  let oddIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      resultArray.push(oddNumbers[oddIndex]);
      oddIndex++;
    } else {
      resultArray.push[array[i]];
    }
  }
  return resultArray;
}
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

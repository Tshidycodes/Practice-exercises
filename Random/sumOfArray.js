/*
return the sum of array as an integer
*/

function sumOfArrayElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumOfArrayElements([1, 2, 5]));

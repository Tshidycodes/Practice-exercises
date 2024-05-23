//We'll pass you an array of two numbers. Return the sum of those two numbers and the all the numbers between them
//Create a function that sums All Numbers in a range.
//RANGE - first find the minimum and maximum values
//FOR loop start at minValue (let i = minValue) end at maxValue i<= maxvalue, increment
//initialize variable at O to store the cummulative values being added
//add the values as they are being looped through to the total
//return the sum
function sumAll(arr) {
  let minValue = Math.min(arr[0], arr[1]);
  let maxValue = Math.max(arr[0], arr[1]);

  let sum = 0;
  for (let i = minValue; i <= maxValue; i++) {
    sum += i;
  }
  console.log(sum);
}
sumAll([1, 4]);

//you can also find max number by using spread operator
/* let numbers = [3,4,1,6,7,8,9,2];
let max = Math.max(...numbers);
console.log(max); outputs: 8;
*/

function summation(n) {
  //function's purpose: adds all positive integers that are less than or equals n
  //need a variable to store all the cummulative sums after every iteration, initialize variable to zero
  let sum = 0;
  //run a for loop to iterate through values from 1 to n
  //add current i values to one another as the loop iterates, add them to the current sum value
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  //return the sum of all values
  return sum;
}
let result = summation(3);
console.log(result);

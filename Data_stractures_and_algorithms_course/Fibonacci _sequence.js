//Problem statement:
/*
Given the number "n", find the first "n" elements of the Fibonacci sequence
In Mathemetics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones
the first two numbers in the sequence are 0 and 1
*/

function fibonacci(n) {
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));

//this loop executes n-2 times

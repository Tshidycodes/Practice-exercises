//Give a natural number "n", Determine if the number is prime or not
/*
A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers
isPrime(5) = true(1*5 or 5*1);
isPrime(4) = false(1*4 or 2*2 or 4*1)
*/

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  // i not equal to n since n is divisible by itself;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));

//Big-O = O(n) our function has linear time complexity, as the value of n increases, the number of times line 15 executes, also increases

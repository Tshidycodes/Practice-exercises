//Gven an integer "n", find the factorial of that integer
/*
In mathematics, the factorial of a non-negative integer "n", denoted n!, is the product of all positive integers less than or equal to "n"
Factorial of zero is 1
*/
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial(5));

//the function contains one for loop; (1 loop -O(n)) our function is linear time complexity Big-O = O(n) this is because as the value of n increases the number of times line 9 exucutes increases 😅

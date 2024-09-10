//The Standard Example: The Fibonacci sequence
//0,1,1,2,3,5,8,3,21
//Definition: A sequence of Numbers where the sum of the previous two create the next one

//without recursion:
const fibonacci = (num, array = [0, 1]) => {
  while (num > 2) {
    const [nextToLast, last] = array.slice(-2);
    array.push(nextToLast + last);
    num -= 1;
  }
  return array;
};

console.log(fibonacci(12));
//[ 0,  1,  1,  2,  3, 5,  8, 13, 21, 34, 55, 89]

//with recursion:
const fib = (num, array = [0, 1]) => {
  if (num <= 2) return array; //if the number is less than or equal to two we exit
  const [nextToLast, last] = array.slice(-2);
  return fib(num - 1, [...array, nextToLast + last]);
};
console.log(fib(12));

//What number is in the nth position of the fibonacci sequesce:

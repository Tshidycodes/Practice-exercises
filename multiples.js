//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

/* Write a function multiples, it should take in a single integer parameter. The function should print out the sum of the multiples as described above.

eg:

multiples(10) // prints 23
multiples(11) // prints 33

*/
function multiples(n) {
  //initialise sum to zero
  let sum = 0;
  //Create a for loop FROM 1 to n (i<=n), start from one because zero is not an integer
  //use if statement to establish whether the input is a multiple of 3 or 5
  //else? if its not a multiple of 3 || 5 then what?
  //append the index value to the sum
  //console-log /print out the sum of the multiples
  //lets set n to 10;
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      //if when you divide current i with 3 or 6 and the remainder is 0, then add it to sum
      sum += i;
    } else {
      sum += 0;
    }
  }
  console.log(sum);
}
multiples(10);

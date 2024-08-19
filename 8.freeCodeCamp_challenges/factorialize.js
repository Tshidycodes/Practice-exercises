//Return the factorial of the provided integer
//if the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n
//factorials are often represented with the shorthand n!
// Function purpose, to multiply all the intigers between 1 and n
//initialize a variable to store the product of all intigers (values when multiplied)
//FOR loop to start at 1 and end at n
//add values to one another with each iteration
function factorialize(num) {
  let factorial = 1; //one because anything times by zero is zero lol
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}
factorialize(5);

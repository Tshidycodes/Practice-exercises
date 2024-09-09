//Recursion is a funtion that calls itself
// example when you have a function that counts down

function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
  console.log("Hooray"); //when it gets to zero it prints "Hooray"
}
countDown(10);

function CountDownRecursion(n) {
  if (n <= 0) {
    //we break out of the loop once i is equal or less than zero
    console.log("Hooray");
    return;
  }
  console.log(n);
  CountDownRecursion(n - 1);
}

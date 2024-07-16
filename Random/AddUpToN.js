//Write a function that calculates 1 upto and including some number n
function addUpTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
    console.log(sum);
  }
  //return sum;
}
let result = add(3);
//console.log(result);
/**first iteration, i = 1 --- sum = 1;
 second iteration, i = 2 === sum = 1+2;
 third iteration, i = 3 ---sum = 1+2+3;
 */

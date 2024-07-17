/* given an integer for each digit that makes up the integer, determine whether it is a divisor
 */

function countDivisors(int) {
  let intString = int.toString();
  //console.log(intString);
  let count = 0;
  for (let i = 0; i < intString.length; i++) {
    if (int % Number(intString[i]) === 0) {
      count++;
    }
  }
  return count;
}
console.log(countDivisors(124));

function add(n, m) {
  return n + m;
}
console.log(add(2, 5));

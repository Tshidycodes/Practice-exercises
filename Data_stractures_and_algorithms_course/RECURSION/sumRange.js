function sumRange(n) {
  let total = 0;
  for (let i = n; i > 0; i--) {
    total += i;
  }
  return total;
}

function sumRangeRecursive(n, total = 0) {
  if (n <= 0) {
    //we leave our loop when i is less than or equal to zero;
    return total; //we want to return our total
  }
  console.log(n);
  sumRangeRecursive(n - 1);
}
sumRangeRecursive(4);
console.log(sumRange(10));

function sumAll(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(sumAll(10));

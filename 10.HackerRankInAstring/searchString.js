function searchString(string) {
  const target = "hackerrank";
  let targetIndex = 0;
  for (let char of string) {
    if (char === target[targetIndex]) {
      targetIndex++;
    }
  }
  if (targetIndex === target.length) {
    return true;
  }
  return false;
}

console.log(searchString("haacckkerrannkk"));
console.log(searchString("haacckkeannkk"));
console.log(searchString("hackerrank"));
console.log(searchString("ckhaerrank"));

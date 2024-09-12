function sumArrays(arr1, arr2) {
  let sum = 0;
  //concat the two arrays
  let combinedArr = arr1.concat(arr2);

  console.log(combinedArr);
  for (let i = 0; i < combinedArr.length; i++) {
    sum += combinedArr[i];
  }
  return sum;
}
console.log(sumArrays([1, 2, 3], [1, 2, 1]));

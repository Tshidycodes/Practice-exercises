//Question 1 - Second Largest Number
//Given an array of size N, print second largest
// distinct element from the array
//input: [12, 35,1,10,34,1] --->> output:34
//input: [10,5,10] --->> output:5
//first remove values that are repeating, show unique values -use Set
//convert set into array
// sort the values
//then get the index

function SecondLargest(arr) {
  const uniqueArr = Array.from(new Set(arr));
  uniqueArr.sort((a, b) => {
    return b - a;
  });
  if (uniqueArr.length >= 2) {
    return uniqueArr[1];
  } else {
    return -1;
  }
}
console.log(SecondLargest([5]));

//Optimised Approach
function SecondLargestOptimised(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(SecondLargestOptimised([14, 23, 65, 45]));

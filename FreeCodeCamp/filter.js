//DEMO for FILTER
let nums = [1, 2, 3, 4, 5, 6];
let num2 = nums.filter(function (item) {
  return item > 3;
});
console.log(num2);

/*
Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/
function bouncer(arr) {
  return arr.filter(function (element) {
    return element;
  });
}

console.log(bouncer([7, "ate", "", false, 9]));

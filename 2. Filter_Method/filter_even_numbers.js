const nums = [
  2, 23, 12, 34, 54, 54, 3, 2, 6, 4, 75, 72, 35, 90, 76, 54, 32, 12, 64, 25, 76,
  86, 97, 43, 23, 65, 85, 42, 23, 54, 76, 98, 99, 123, 345, 655, 678, 986, 907,
  4221,
];
const evenNumbers = nums.filter(function (num) {
  nums.sort((a, b) => a - b);
  return num % 2 === 0;
});

const oddNumbers = nums.filter(function (num) {
  nums.sort((a, b) => b - a);
  return num % 2 !== 0;
});
console.log(evenNumbers);
console.log(oddNumbers);

const ages = [32, 33, 16, 40, 34, 21, 67, 46, 99, 20];
//filtering adults manually:
const adults = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    adults.push(ages[i]);
  }
}
console.log(adults);

//Using filter method: used to filter array elements
const numberz = [32, 33, 16, 40, 34, 21, 67, 46, 99, 20];
// replace annonymous function with arrow function:
//const faveNumbers = numberz.filter(function (numberz) {
//return numberz > 18;
const faveNumbers = numberz.filter((numberz) => numberz > 18);
console.log(faveNumbers);

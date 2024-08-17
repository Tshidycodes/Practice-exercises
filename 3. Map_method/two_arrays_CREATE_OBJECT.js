const ages = [16, 18, 20];
const names = ["John", "Mark", "Jane"];

const students = ages.map((age, index) => {
  const name = names[index];
  return { name: name, age: age };
});

console.log(students);

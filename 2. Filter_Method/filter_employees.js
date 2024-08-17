const employees = [
  { name: "John", age: 25, salary: 1000 },
  { name: "Mary", age: 32, salary: 2000 },
  { name: "Mike", age: 45, salary: 7000 },
  { name: "Jane", age: 28, salary: 3000 },
  { name: "Bob", age: 33, salary: 4000 },
  { name: "Bob", age: 33, salary: 40000 },
  { name: "Mary", age: 44, salary: 13000 },
];

const brokeEmployees = employees.filter(
  (employees) =>
    employees.salary > 2000 && employees.salary < 15000 && employees.age > 30
);

//can be written as:
//const checkEmployees = employees.filter(function(employees){
//return employees.salary > 2000 && employees.salary})
console.log(brokeEmployees);

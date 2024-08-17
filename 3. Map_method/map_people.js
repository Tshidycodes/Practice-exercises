//Array named people with objects
const people = [
  { first: "Gandalf", last: "Greyjoy", age: "1000" },
  { first: "John", last: "Snow", age: "16" },
  { first: "Arya", last: "Starr", age: "14" },
  { first: "Harry", last: "Potter", age: "11" },
];
const fullName = people.map(
  (person) => `${person.first} ${person.last} is ${person.age} old`
);

console.log(fullName);

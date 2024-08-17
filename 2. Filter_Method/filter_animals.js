//Array of animals where each element is an object representing an animal
const animals = [
  { name: "Lion", family: "Cat", food: "Meat" },
  { name: "Tiger", family: "Cat", food: "Meat" },
  { name: "shark", family: "Fish", food: "Meat" },
  { name: "sparrow", family: "Bird", food: "Grass" },
  { name: "eagle", family: "Bird", food: "Meat" },
  { name: "penguin", family: "Bird", food: "fish" },
  { name: "squirrel", family: "rodent", food: "nuts" },
];

//we want to filter our animals based on some conditions

const meatEaters = animals.filter((animals) => animals.food === "Meat");
const grassEaters = animals.filter((animals) => animals.food === "Grass");
const catOmnivores = animals.filter(
  (animals) => animals.family === "Cat" && animals.food === "Meat"
);
console.log(meatEaters);
console.log(grassEaters);
console.log(catOmnivores);

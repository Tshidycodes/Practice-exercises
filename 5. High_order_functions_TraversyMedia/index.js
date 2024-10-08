﻿//Two Arrays __ companies and ages
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company None", category: "Retail", start: 1981, end: 1989 },
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/*
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}
*/

for (let i = 0; i < ages.length; i++) {
  console.log(ages[i]);
}

//forEach - for loop alternative call

companies.forEach(function (company) {
  //console.log(company);
  console.log(company.name);
});
//filter - allows us to filer things from the array

let canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 30) {
    canDrink.push(ages[i]); //push current age iteration
  }
}
console.log(canDrink);

const canDrive = ages.filter(function (age) {
  if (age >= 16) {
    return true;
  }
});

console.log(canDrive);
let oddNumbers = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] % 2 !== 0) {
    oddNumbers.push(ages[i]);
  }
}
console.log(oddNumbers);

const evenNumbers = ages.filter(function (age) {
  if (age % 2 === 0) {
    return true;
  }
});
console.log(evenNumbers);

//using E6 Arrow functions

const underAge = ages.filter((age) => age <= 16);
console.log(underAge);
//map
//sort
//reduce

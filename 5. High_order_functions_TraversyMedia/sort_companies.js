//Two Arrays __ companies and ages
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//sort
const companyAges = companies.map((company) => company.end - company.start);
console.log(companyAges);
const sortedCompanies = companyAges.sort(
  (company1, company2) => company1 - company2
);
console.log(sortedCompanies);

//this is how a-b works:
const sorted = companies.sort(function (c1, c2) {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});
console.log(sorted);

const sortedComp = companies.sort((a, b) => {
  a.start - b.start ? 1 : -1;
});
console.log(sortedComp);

const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);

//reduce
//used for many things, one of those being to add
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}
console.log(ageSum);

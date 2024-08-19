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
  { name: "Company None", category: "Retail", start: 1981, end: 1989 },
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//filter Retail companies
let retCompanies = [];
for (let i = 0; i < companies.length; i++) {
  if (companies[i].category === "Retail" && companies[i].start >= 1985) {
    retCompanies.push(companies[i]);
  }
}
console.log(retCompanies);

const retailCompanies = companies.filter(
  (company) => company.category === "Retail" && company.start >= 1985
);

console.log(retailCompanies);

//companies that started in the 80s:
const eightiesCompanies = companies.filter((company) => company.start >= 1980);
console.log(eightiesCompanies);

//access the names of the companies:
let eightiescompanyNames = [];
for (let i = 0; i < eightiesCompanies.length; i++)
  eightiescompanyNames.push(eightiesCompanies[i].name);
console.log(eightiescompanyNames);

const ninetiesCompanies = companies.filter((company) => company.start >= 1990);
console.log(ninetiesCompanies);
const ninetiesCompatyNames = ninetiesCompanies.map((company) => company.name);
console.log(ninetiesCompatyNames);

//get companies that lasted 10years or more:

const olderCompanies = companies.filter(
  (company) => company.end - company.start >= 10
);
console.log(olderCompanies);
const olderCompaniesNames = olderCompanies.map((company) => company.name);
console.log(olderCompaniesNames);
//access the
//map
//sort
//reduce

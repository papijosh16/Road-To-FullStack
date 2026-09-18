const numbers = [1, 2, 3, 4, 5];

console.log("==== MAP ====");

const doubleNumber = numbers.map(function(number){
    return number * 2;
});

console.log(doubleNumber);

console.log("==== FILTER ====");

const ages = [15, 18, 21, 16, 25, 17];

const adults = ages.filter(function(age){
    return age >= 18;
});

console.log(adults);

console.log("==== FIND ====");

const companies = ["Google", "Microsoft", "OpenAI", "Apple"];

const company = companies.find(function(company) {
    return company === "OpenAI";
});

console.log(company);

console.log("==== JOB SALARIES ====");

const salaries = [15000, 22000, 18000, 30000, 25000];

const higherSalaries = salaries.filter(function(salary){
    return salary >= 20000;
});

console.log(higherSalaries);
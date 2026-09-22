const greet = (name) => {
    return `Hello, ${name}!`;
};

console.log("==== GREETING ====");
console.log(greet("Joshua"));
console.log(greet("Paps"));

const add = (a, b) => {
    return a + b;
};

console.log("==== ADDITION ====");
console.log(add(10, 5));
console.log(add(20, 30));

const square = (number) => number * number;
console.log("==== SQUARE ====");
console.log(square(5));
console.log(square(8));

const numberss = [1, 2, 3, 4, 5];

const doubled = numberss.map(function(number) {
    return number * 2;
});
console.log("==== DOUBLED ====");
console.log(doubled);

const intro = (name, course) => {
    return `Hi, I'm ${name}.
I graduated with a ${course} degree`;
};

console.log("==== MY INTRODUCTION ====");
console.log(intro("Joshua", "BSIT"));

const multiply = (a, b) => a * b;

console.log("==== MULTIPLICATION ====");
console.log(`5 x 5 = ${multiply(5, 5)}`);
console.log(`8 x 4 = ${multiply(8, 4)}`);

const companies = ["Google", "Microsoft", "OpenAI", "Apple", "Amazon"];

const companyFive = companies.filter((company) => company.length > 5);

console.log("==== COMPANIES WITH MORE THAN 5 CHARACTERS ====");
console.log(companyFive);

const numbers = [10, 20, 30, 40, 50];

const number = numbers.find((number) => number === 30);

console.log("==== FIND A NUMBER ====");
console.log(number);
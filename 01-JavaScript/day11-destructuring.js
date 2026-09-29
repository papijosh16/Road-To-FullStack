const foods = ["Chicken", "Monggo", "Bangus"];

const [food1, food2, food3] = foods;

console.log("==== MY FAVORITE FOODS ====");
console.log(food1);
console.log(food2);
console.log(food3);

const numbers = [10, 20, 30, 40, 50];

const [first, , third, , fifth] = numbers;

console.log("==== SKIPPED NUMBERS ====");
console.log(first);
console.log(third);
console.log(fifth);

const student = {
    name: "Joshua",
    course: "BSIT",
    school: "LCCB",
    status: "Graduate"
};

const {name, course, school, status} = student;

console.log("==== Object Destructuring ====");
console.log(name);
console.log(course);
console.log(school);
console.log(status);

const laptop = {
    brand: "Lenovo",
    model: "IdeaPad",
    ram: "16GB"
};

const {brand: laptopBrand, model: laptopModel, ram: laptopRam} = laptop;

console.log("==== Rename Variables ====");
console.log(laptopBrand);
console.log(laptopModel);
console.log(laptopRam);

const student1 = {
    name: "Joshua",
    course: "BSIT",
    age: 25
};

const introduce = ({ name, course }) => {
    return `Hi, I'm ${name} and I graduated with a ${course} degree.`;
};

console.log(introduce(student1));
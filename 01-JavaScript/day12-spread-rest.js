const foods = ["Chicken", "Monggo", "Bangus"];
const newFoods = [...foods];

console.log("==== FOOD COPY ====");
console.log(newFoods);

const foodss = ["Chicken", "Monggo"];
const moreFoods =[...foodss, "Bangus" , "Egg" , "Rice"];

console.log("==== MORE FOODS ====");
console.log(moreFoods);

const fruits = ["Apple", "Banana"];
const vegetables = ["Carrot", "Potato"];
const groceries = [...fruits , ...vegetables];

console.log("==== GROCERIES ====");
console.log(groceries);

const laptop = {
    brand: "Lenovo",
    model: "IdeaPad",
    ram: "16GB"
};

const updatedLaptop = {
    ...laptop , 
    ram: "32GB"
};

console.log("==== UPDATED LAPTOP ====");
console.log(updatedLaptop);

const numbers = [10, 20, 30, 40, 50];
const [first , ...remaining] = numbers;

console.log("==== REST OPERATOR ====");
console.log(first);
console.log(remaining);

const calculateTotal = (...prices) => {
    return prices.reduce((total, price) => total + price, 0);
};

console.log("==== REST + ARROW ====");
console.log(calculateTotal(100, 200));
console.log(calculateTotal(100, 200, 300));
console.log(calculateTotal(50, 50, 100, 200));
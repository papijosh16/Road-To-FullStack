const laptop = {
    brand: "Apple",
    model: "MacBook Pro",
    ram: "16GB",
    storage: "512GB",
    color: "Space Black"
};

console.log("==== MY DREAM LAPTOP ====");

console.log("");

console.log(`Brand: ${laptop.brand}`);
console.log(`Model: ${laptop.model}`);
console.log(`RAM: ${laptop.ram}`);
console.log(`Storage: ${laptop.storage}`);
console.log(`Color: ${laptop.color}`);

console.log("");

laptop.ram = "32GB";
laptop.price = "₱139,990";
delete laptop.color;

console.log(laptop);
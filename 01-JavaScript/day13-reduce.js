const numbers = [10 , 20 , 30 , 40 , 50];
const total = numbers.reduce((sum , number) => sum + number, 0);

console.log("==== ADD NUMBERS ====");
console.log(total);

const prices = [150 , 250 , 100 , 300];
const bill = prices.reduce((sum , price) => sum + price, 0);

console.log("==== SHOPPING CART ====");
console.log("Total: ", bill);


const products = [
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1000 },
    { name: "Headset", price: 1500 }
];
const totalBill = products.reduce ((sum , product) => sum + product.price, 0);

console.log("==== PRODUCTS ====");
console.log(totalBill);


const productss = [
    { name: "Mouse", pricee: 500 },
    { name: "Keyboard", pricee: 1000 },
    { name: "Headset", pricee: 1500 },
    { name: "Monitor", pricee: 800 }
];
const mostExpensive = productss.reduce((max , productss) => { return productss.pricee > max.pricee ? productss : max;});

console.log("==== MOST EXPENSIVE ====");
console.log(mostExpensive.name);
console.log(mostExpensive.pricee);

const numberss = [5, 10, 15, 20];
const multiply = numberss.reduce((accumulator , currentValue) => accumulator * currentValue, 1);

console.log("==== MULTIPICATION ====");
console.log(multiply);
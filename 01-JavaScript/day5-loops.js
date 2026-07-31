const gadgets = [
    "MacBook Pro",
    "iPhone 17 Pro",
    "iPad Pro",
    "Apple Watch",
    "AirPods Pro"
];

console.log("==== DREAM GADGETS ====");

for (let i = 0; i < gadgets.length; i++){
    console.log(gadgets[i]);
}

console.log("");
console.log("==== MULTIPLACATION TABLE OF 5 ====");

const number = 5;

for (let i = 1; i <= 10; i++){
    const result = number * i;
    console.log(`${number} x ${i} = ${result} `);
}
const student = "Joshua";
const math = 95;
const science = 90;
const english = 93;

const average = (math + science + english) / 3;

console.log("===== STUDENT REPORT =====");
console.log(`Student: ${student}`);
console.log(`Math: ${math}`);
console.log(`Science: ${science}`);
console.log(`English: ${english}`);
console.log(`Average: ${average}`);

if (average >= 90){
    console.log("Status: Excellent");
} else {
    console.log("Status: Good");
}
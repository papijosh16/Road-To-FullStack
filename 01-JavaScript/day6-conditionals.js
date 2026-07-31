const score = 92;
console.log("1.");
console.log("==== EXAM RESULT ====");

if (score >= 90) {
    console.log("Grade: A");
}
else if (score >= 80) {
    console.log("Grade: B");
}
else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Failed");
}

const age = 25;

console.log("2.");
console.log("==== AGE CHECK ====");

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

const hasResume = true;
const knowsJavaScript = true;

console.log("3.");
console.log("==== JOB APPLICATION ====");

if (hasResume && knowsJavaScript) {
    console.log("Qualified for interview.");
} else {
    console.log("Need more preparation.");
}

const hasExperience = false;
const hasPortfolio = true;

console.log("4.");
console.log("==== PORTFOLIO CHECK ====");

if (hasExperience || hasPortfolio) {
    console.log("Can apply.");
} else {
    console.log("Need experience or portfolio.");
}

const name = "Joshua";
const password = "12345"
console.log("5.");
console.log("==== SIGN IN ====");
if (name === "Joshua" && password === "12345"){
    console.log("Login Successfully!")
} else {
    console.log("Wrong Username or Password")
}
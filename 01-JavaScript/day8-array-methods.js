const skills = ["HTML", "CSS", "JavaScript"];

console.log("====MY SKILLS====");

console.log(skills);

skills.push("React");

console.log(skills);

console.log("==== REMOVE LAST SKILL====");

skills.pop();

console.log(skills);

console.log("====ADD FIRST SKILL====");

skills.unshift("Git");

console.log(skills);

console.log("====REMOVE FIRST SKILL====");

skills.shift();

console.log(skills);

console.log("====CHECK SKILL====");

console.log(skills.includes("JavaScript"));
console.log(skills.includes("Phyton"));

console.log("====MY TOTAL SKILLs====");

console.log(`I have ${skills.length} Skills`);
/*
🎲 Power & Random — 

GOAL:
Practice:
- Math.pow()
- Math.sqrt()
- Math.random()

RULES:
- Observe how random numbers change on refresh
*/

/* STEP 1 — Exponentiation */
// Use Math.pow(2, 4)
// console.log the result
// ✅ WRITE YOUR CODE UNDER THIS LINE
console.log(Math.pow(2, 4));

/* STEP 2 — Square root */
// Use Math.sqrt(81)
// console.log the result
// ✅ WRITE YOUR CODE UNDER THIS LINE
console.log(Math.sqrt(81));

/* STEP 3 — Random number (0–1) */
// Generate a random number
// console.log it
// ✅ WRITE YOUR CODE UNDER THIS LINE

console.log(Math.random());

/* STEP 4 — Random whole number (1–10) */
// Generate a random integer between 1 and 10
// Hint: Math.floor(Math.random() * 10) + 1
// console.log it
// ✅ WRITE YOUR CODE UNDER THIS LINE

function getRandomNumber(){
    return Math.floor(Math.random() * 10 + 1);
}

console.log(getRandomNumber());

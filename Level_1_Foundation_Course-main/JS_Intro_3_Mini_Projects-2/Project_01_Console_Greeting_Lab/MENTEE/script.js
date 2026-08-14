/*
  🧠 Project 1 — Console Greeting Lab 

  IMPORTANT RULES:
  - After each step: SAVE → REFRESH → check the CONSOLE.
*/

// ------------------------------
// SYNTAX SPOTLIGHT (read this!)
// ------------------------------
// ;  semicolon → ends a statement (often optional, but we will use it for clarity).
// () parentheses → used to CALL a function, like console.log(...), and in if (condition).
// {} curly braces → create a BLOCK of code, like if (...) { ... } else { ... }
// "" or '' quotes → make a STRING.
// numbers → like 10, 3.14, 520

// STEP 1 — Your first JavaScript line
/*
  Write a console log that says: Hello JavaScript!
  Make sure you include:
  - parentheses: console.log( ... )
  - quotes for the string
  - a semicolon at the end ;
*/
console.log("Hello Javascript!");

// ✅ WRITE YOUR CODE UNDER THIS LINE

// STEP 2 — Variables (let vs const)
/*
  Create a variable called name using const (because it won't change).
  Example: const name = "John";
  Create a variable called mood using let (because it CAN change).
  Example: let mood = "excited";
  Console.log both variables so you can SEE their values.
*/
const name = "John";
let age = 12;

console.log(name, age);

// ✅ WRITE YOUR CODE UNDER THIS LINE

// STEP 3 — Data types (string, number, boolean)
/*
  Create:
  - a string: favoriteFood
  - a number: age
  - a boolean: isLearningJS
  Then console.log each one.
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE

let favoriteFood = "Burgers";
age = 20;
let isLearningJS = true;
console.log(favoriteFood, age, isLearningJS);

// STEP 4 — Operators (+ and -) mini demo
/*
  Create a number called points = 10
  Then create:
  - pointsAfterWin = points + 5
  - pointsAfterLoss = points - 3
  Console.log all 3 numbers to confirm + and - work.
*/


let points = 10;

let pointsAfterWin = points + 5;
let pointsAfterLoss = points = 3;
console.log(pointsAfterWin, pointsAfterLoss);
// ✅ WRITE YOUR CODE UNDER THIS LINE

// STEP 5 — Curly braces practice (if/else block)
/*
  Write an if/else that checks if isLearningJS is true.
  If true: console.log("Keep going!")
  Else: console.log("Start today!")
  Notice how if/else uses parentheses (condition) and curly braces { }.
*/

if (isLearningJS) {
  console.log("Keep going!");
} else {
  console.log("Start today!");
}

// ✅ WRITE YOUR CODE UNDER THIS LINE

/*
  🧠 Project 3 — Mini Console Quiz 
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

// STEP 1 — Setup variables (answers)
/*
  Create variables for 'user answers' (pretend the user answered):
  - answer1 (string) for: What is 2 + 2?
  - answer2 (string) for: What keyword makes a variable you can change?
  - answer3 (boolean) for: JavaScript runs in the browser (true/false)
  Then console.log all answers (debug step).
*/

let answer1 = "4";
let answer2 = "let";
let answer3  = true;

console.log(answer1, answer2, answer3);

// ✅ WRITE YOUR CODE UNDER THIS LINE

// STEP 2 — Create the correct answers
/*
  Create correct1, correct2, correct3
  Example:
  - correct1 could be "4"
  - correct2 could be "let"
  - correct3 could be true
*/

let correct1 = "4";
let correct2 = "lett";
let correct3 = true;

// ✅ WRITE YOUR CODE UNDER THIS LINE

// STEP 3 — Compare using === and !==
/*
  Create booleans:
  - isQ1Correct = answer1 === correct1
  - isQ2Correct = answer2 === correct2
  - isQ3Correct = answer3 === correct3
  Now create a 'wrong' check using !==:
  - isQ2Wrong = answer2 !== correct2
  Console.log each boolean.
*/

let isQ1Correct = answer1 === correct1;
let isQ2Correct = answer2 === correct2;
let isQ3Correct = answer3 === correct3;


console.log(isQ1Correct, isQ2Correct, isQ3Correct);

// ✅ WRITE YOUR CODE UNDER THIS LINE

// STEP 4 — Use > and < comparisons (requested)
/*
  Create a number called score (start at 0).
  If isQ1Correct is true, add 1 to score. Same for Q2 and Q3.
  Then console.log score.
  Create booleans:
  - hasAtLeastOne = score > 0
  - isPerfect = score < 3  (this should be false only when score is 3)
  Note: we are practicing > and < here.
*/

let score = 0;
if (isQ1Correct) {
  score += 1;
}
if (isQ2Correct) {
  score += 1;
}
if (isQ3Correct) {
  score += 1;
}

let hasAtLeastOne = score > 0;
let isPerfect = score === 3;

// ✅ WRITE YOUR CODE UNDER THIS LINE

// STEP 5 — Use logical operators && and ||
/*
  Create:
  - passedAll = isQ1Correct && isQ2Correct && isQ3Correct
  Also create:
  - passedAtLeastOne = isQ1Correct || isQ2Correct || isQ3Correct
  Console.log both.
*/

let passedAll = isQ1Correct && isQ2Correct && isQ3Correct;

let passedAtLeastOne = isQ1Correct || isQ2Correct || isQ3Correct;
// ✅ WRITE YOUR CODE UNDER THIS LINE

// STEP 6 — Final debugging message with if/else
/*
  Use if/else to print one final message:
  - 'Perfect score!' if passedAll is true
  - 'Some correct answers' if passedAtLeastOne is true
  - 'Try again' otherwise
  This step forces you to use parentheses + curly braces correctly.
*/

if (passedAll) {
  console.log("Perfect Score!");
}
else if (passedAtLeastOne) {
  console.log("Some correct answers");
}
else {
  console.log("Try again");
}
// ✅ WRITE YOUR CODE UNDER THIS LINE

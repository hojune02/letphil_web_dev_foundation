/*
  🧠 Project 2 — Tip Calculator Debugger 
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

// STEP 1 — Set the inputs (numbers)
/*
  Create these numbers:
  - billAmount (example: 520)
  - tipPercentWhole (example: 15 for 15%)
  - peopleCount (example: 2)
  Console.log the inputs so you can SEE them.
*/

let billAmount = 520;
let tipPercentWhole = 15;
let peopleCount = 2;

console.log(billAmount, tipPercentWhole, peopleCount);

// ✅ WRITE YOUR CODE UNDER THIS LINE

// STEP 2 — Percentage logic (15% → decimal)
/*
  Convert the whole percent into a decimal:
  Example: 15% becomes 15 / 100 which equals 0.15
  Create: tipPercentDecimal = tipPercentWhole / 100
  Console.log tipPercentDecimal.
*/

let tipPercentDecimal = tipPercentWhole / 100;

console.log(tipPercentDecimal);

// ✅ WRITE YOUR CODE UNDER THIS LINE

// STEP 3 — Calculate the tip (multiplication)
/*
  Create tipAmount = billAmount * tipPercentDecimal
  Console.log tipAmount (debug step).
*/

let tipAmount = billAmount * tipPercentDecimal;

console.log(tipAmount);

// ✅ WRITE YOUR CODE UNDER THIS LINE

// STEP 4 — Calculate total bill (addition)
/*
  Create totalAmount = billAmount + tipAmount
  Console.log totalAmount.
*/


let totalAmount = billAmount + tipAmount;

console.log(totalAmount);
// ✅ WRITE YOUR CODE UNDER THIS LINE

// STEP 5 — Split per person (division)
/*
  Create perPerson = totalAmount / peopleCount
  Console.log perPerson.
  Note: you might see decimals — that's normal.
*/

let perPerson = totalAmount / peopleCount;

console.log(perPerson);

// ✅ WRITE YOUR CODE UNDER THIS LINE

// STEP 6 — Use % (remainder) operator (requested)
/*
  Use % to check if the bill is divisible evenly by peopleCount.
  Create remainder = billAmount % peopleCount
  Console.log remainder.
  If remainder is 0, it divides evenly. If not, there's a leftover remainder.
*/

let remainder = billAmount % peopleCount;

console.log(remainder);

// ✅ WRITE YOUR CODE UNDER THIS LINE

// STEP 7 — Debugging checks (>, <)
/*
  Console.log booleans that answer:
  - Is tipAmount > 0 ?
  - Is totalAmount > billAmount ?
  - Is remainder < peopleCount ? (it should be!)
*/

console.log(tipAmount > 0, totalAmount > billAmount, remainder < peopleCount);

// ✅ WRITE YOUR CODE UNDER THIS LINE

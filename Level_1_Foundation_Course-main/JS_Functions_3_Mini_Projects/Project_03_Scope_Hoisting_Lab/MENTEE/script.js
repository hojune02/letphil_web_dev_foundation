/*
🔭 Scope & Hoisting Lab — 

TOPICS:
- Global scope vs function scope (local scope)
- What variables a function can "see"
- Hoisting (what gets lifted to the top)
  - Function declarations are hoisted
  - Function expressions (with const/let) are NOT hoisted

RULES:
- Write code under each step.
- Read the comments carefully — this project is about "why" things work.
*/

/* -----------------------------------------
   STEP 1 — Global vs Local
   -----------------------------------------
   1) Create a global variable called city (string)
   2) Create a function called printCity
      - Inside the function, console.log city
   3) Call printCity()
*/

let city = "Seoul";

function printCity(){
   console.log(city);
}

printCity();


// ✅ WRITE YOUR CODE UNDER THIS LINE

/* -----------------------------------------
   STEP 2 — Local variables stay inside the function
   -----------------------------------------
   1) Create a function called makeSecret
   2) Inside it, create a variable secret (string)
   3) console.log secret inside the function
   4) Call makeSecret()

   IMPORTANT:
   - Do NOT try to console.log(secret) outside the function
   - That would cause an error (secret is local)
*/

function makeSecret(){
   let secret = "Secret!";
   console.log(secret);
}

makeSecret();

// ✅ WRITE YOUR CODE UNDER THIS LINE

/* -----------------------------------------
   STEP 3 — Scope shadowing (same name, different place)
   -----------------------------------------
   1) Create a global variable called level (number)
   2) Create a function called printLevel
      - Inside, create ANOTHER variable called level (different value)
      - console.log("inside:", level)
   3) Outside the function, console.log("outside:", level)
   4) Call printLevel()
*/

let level = 1;
function printLevel(){
   let level = 3;
   console.log("inside: ", level);
}

console.log("outside: ", level);
printLevel();
// ✅ WRITE YOUR CODE UNDER THIS LINE

/* -----------------------------------------
   STEP 4 — Hoisting: function declaration
   -----------------------------------------
   Create a function named hoistedHello() using a FUNCTION DECLARATION.
   Then call it BEFORE its written (above it in the file).

   Example:
   hoistedHello();
   function hoistedHello() { ... }

   It works because declarations are hoisted.
*/

hoistedHello();
function hoistedHello(){
   console.log("Hello hoisted");
}

// ✅ WRITE YOUR CODE UNDER THIS LINE

/* -----------------------------------------
   STEP 5 — NOT hoisted: function expression
   -----------------------------------------
   Create a function expression stored in const notHoistedHello.

   Try calling it BEFORE it is defined.
   Then comment that call out (so your file doesn't crash).

   Explain in a comment:
   - Why does it fail?
*/

// notHoistedHello();
const notHoistedHello = () => {
   console.log("Hello!");
}

// ✅ WRITE YOUR CODE UNDER THIS LINE

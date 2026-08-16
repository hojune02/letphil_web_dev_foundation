// Mentee Version — Steps Only (same steps appear in Mentor)

// STEP 1 — Make a variable addExpr that stores a function expression which returns a+b.
const addExpr = function(a,b) {return a+b;}

// STEP 2 — Make a variable sayByeExpr that stores a function expression which returns 'Bye, <name>!'

const sayByeExpr = function(name){return `Bye, ${name}!`};

// STEP 3 — Make a variable isEvenExpr that stores a function expression which returns true if n is even.
const isEvenExpr = function(n){return n % 2 === 0;};

// STEP 4 — Make a variable pickLongerExpr that returns the longer of two strings.
const pickLongerExpr = function(a,b) {
    let longer = a.length > b.length ? a : b;
    return longer;
}

// STEP 5 — TEST: Log calls to each expression to the console with sample inputs.

console.log(addExpr(1, 2));
console.log(isEvenExpr(3));
console.log(sayByeExpr("Hojune"));
console.log(pickLongerExpr("Hellooo", "Hellooooo"));

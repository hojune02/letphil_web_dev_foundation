// Mentee Version — Steps Only (same steps appear in Mentor)

// STEP 1 — Make a constant addArrow assigned to an arrow function that returns a+b.
const addArrow = (a, b) => {
    return a + b
}

// STEP 2 — Make a constant squareArrow that returns n*n (use concise one-line form).
const squareArrow = (n) => {
    return n*n;
}

// STEP 3 — Make a constant describeArrow that takes (name, city) and returns a sentence.
const describeArrow = (name, city) => {
    return `I'm ${name} from ${city}.`;
}

// STEP 4 — Make a constant maxArrow that returns the max of two numbers using a conditional (?:).
const maxArrow = (a, b) => {
    let max = a > b ? a : b;
    return max;
}

// STEP 5 — TEST: Log calls to each arrow function with sample values.

console.log(addArrow(1, 2));
console.log(squareArrow(156));
console.log(describeArrow("Hojune", "Seoul"));
console.log(maxArrow(1, 2));

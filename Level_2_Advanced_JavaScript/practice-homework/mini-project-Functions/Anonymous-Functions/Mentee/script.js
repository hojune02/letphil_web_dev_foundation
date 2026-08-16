// Mentee Version — Steps Only (same steps appear in Mentor)

// STEP 1 — Use setTimeout with an anonymous function to log 'Done!' after 500ms.
setTimeout(() => {
    console.log("Done!");
}, 500);

// STEP 2 — Make an array of numbers and use forEach with an anonymous function to log each double.
let nums = [1, 2, 3];
nums.forEach((num) => {
    console.log(`${num * 2}`);
})

// STEP 3 — Use map with an anonymous function to return numbers squared.
let squared = nums.map((num) => (num * num));
console.log(squared);

// STEP 4 — Use filter with an anonymous function to keep only strings longer than 3 letters from ['pen','book','AI','tool'].

let arr = ['pen', 'book', 'AI', 'tool'];
arr = arr.filter((string) => string.length > 3);
console.log(arr)
// STEP 5 — Use reduce with an anonymous function to sum an array; log the result.

let sum = nums.reduce((prev, curr) => {return prev + curr});
console.log(sum);

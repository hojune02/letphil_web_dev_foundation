/*
🧰 Array Toolbox — 

GOAL:
Practice basic array skills:
- Create an array
- Check its size with .length
- Read/update items by index
- Use push, pop, shift, unshift
- Use splice to remove/insert in the middle

RULES:
- Write code under each step.
- Use console.log() to prove the array changes.
*/

/* -----------------------------------------
   STEP 1 — Create an array + check size
   -----------------------------------------
   1) Create an array called groceries with 4 strings
      Example: ["eggs", "milk", "rice", "coffee"]
   2) console.log the array
   3) console.log("length:", groceries.length)
*/
let groceries = ["eggs", "milk", "rice", "coffee"];
console.log(groceries);
console.log("Length: ", groceries.length);

// ✅ WRITE YOUR CODE UNDER THIS LINE

/* -----------------------------------------
   STEP 2 — Read and update by index
   -----------------------------------------
   1) console.log the FIRST item in the array (index 0)
   2) Change the second item (index 1) to a new value
   3) console.log the updated array
*/

console.log(groceries[0]);
groceries[1] = "banana";
console.log(groceries);

// ✅ WRITE YOUR CODE UNDER THIS LINE

/* -----------------------------------------
   STEP 3 — push + pop (end of array)
   -----------------------------------------
   1) push "chocolate" into the array
   2) console.log after push
   3) pop the last item into a variable called removedEnd
   4) console.log removedEnd
   5) console.log the array after pop
*/

groceries.push("chocolate");
console.log(groceries);
let removedEnd = groceries.pop();
console.log(groceries);


// ✅ WRITE YOUR CODE UNDER THIS LINE

/* -----------------------------------------
   STEP 4 — unshift + shift (start of array)
   -----------------------------------------
   1) unshift "water" to the start
   2) console.log after unshift
   3) shift the first item into a variable called removedStart
   4) console.log removedStart
   5) console.log the array after shift
*/

groceries.unshift("water");
console.log(groceries);
let removedStart = groceries.shift("water");
console.log(removedStart);
console.log(groceries);

// ✅ WRITE YOUR CODE UNDER THIS LINE

/* -----------------------------------------
   STEP 5 — splice (middle edit)
   -----------------------------------------
   Your groceries array is your "editable list".

   1) Use splice to remove 1 item starting at index 2
   2) console.log the removed item (splice returns an array)
   3) console.log groceries after removal

   Then:
   4) Use splice to INSERT "tea" at index 1 (remove 0)
   5) console.log groceries after insert
*/

console.log(groceries.splice(2, 1));
console.log(groceries);

groceries.splice(1, 1, "tea");
console.log(groceries);


// ✅ WRITE YOUR CODE UNDER THIS LINE

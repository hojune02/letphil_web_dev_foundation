/*
🧩 Data Iteration — 

GOAL:
Practice "advanced loops" used constantly in real code:
- forEach (arrays)
- for...of (arrays)
- for...in (objects)

RULES:
- Write code under each step.
- Use console.log() to prove the loop is working.
*/

/* -----------------------------------------
   STEP 1 — Create an array (forEach + for...of)
   -----------------------------------------
   1) Create an array called favoriteCities with 4 strings.
      Example: ["CDMX", "Seoul", "Tokyo", "London"]
   2) console.log the whole array.
*/
let favouriteCities = ["CDMX", "Seoul", "Tokyo", "London"]

console.log(favouriteCities);

// ✅ WRITE YOUR CODE UNDER THIS LINE

/* -----------------------------------------
   STEP 2 — forEach (array loop)
   -----------------------------------------
   Use favoriteCities.forEach(...) to:
   - console.log each city
   - include the index too (so you can see position)
   Format idea:
   "City #0: CDMX"
*/
let count = 1;
favouriteCities.forEach(function (city) {
   console.log(`City #${count}: ${city}`);
   count += 1;
})

// ✅ WRITE YOUR CODE UNDER THIS LINE

/* -----------------------------------------
   STEP 3 — for...of (array loop)
   -----------------------------------------
   Use a for...of loop to:
   - print every city in ALL CAPS
   Hint:
   - city.toUpperCase()
*/
for (let city of favouriteCities){
   console.log(city.toUpperCase());
}

// ✅ WRITE YOUR CODE UNDER THIS LINE

/* -----------------------------------------
   STEP 4 — Create an object (for...in)
   -----------------------------------------
   Create an object called profile with:
   - name (string)
   - age (number)
   - isMentor (boolean)
   Example:
   { name: "Jocelin", age: 32, isMentor: true }
*/

let profile = {
   name: "Hojune",
   age: "12",
   isMentor: "True"
}

// ✅ WRITE YOUR CODE UNDER THIS LINE

/* -----------------------------------------
   STEP 5 — for...in (object loop)
   -----------------------------------------
   Use for...in to loop through profile:
   - log the KEY
   - log the VALUE
   Format idea:
   "age => 32"
*/
for (let key in profile){
   console.log(`Key ${key}: value ${profile[key]}`)
}

// ✅ WRITE YOUR CODE UNDER THIS LINE

/* -----------------------------------------
   STEP 6 — Mini challenge (combine loops)
   -----------------------------------------
   Create an array of objects called students:
   [
     { name: "Ana", level: 1 },
     { name: "Leo", level: 2 },
     { name: "Mia", level: 1 }
   ]

   Use forEach to:
   - log ONLY the students where level === 1
*/
let students = 
[
   { name: "Ana", level: 1 },
   { name: "Leo", level: 2 },
   { name: "Mia", level: 1 }
];

students.forEach(function (student) {
   if (student['level'] === 1) {
      console.log(student);
   }
})

// ✅ WRITE YOUR CODE UNDER THIS LINE

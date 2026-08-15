/*
📚 Object Directory —

GOAL:
Practice object basics + object looping:
- Create an object
- Read and update properties
- Add new properties
- Use for...in to loop keys and values

RULES:
- Write code under each step.
- Use console.log() to prove the object changes.
*/

/* -----------------------------------------
   STEP 1 — Create an object
   -----------------------------------------
   Create an object called contact with:
   - name (string)
   - phone (string)
   - city (string)

   Then console.log(contact)
*/
let contact = {
   name: "Hojune",
   phone: "010-1111-1111",
   city: "Seoul"
};

console.log(contact);

// ✅ WRITE YOUR CODE UNDER THIS LINE

/* -----------------------------------------
   STEP 2 — Read and update properties
   -----------------------------------------
   1) console.log the contact's name using dot notation
   2) Update the city to a new value
   3) console.log the updated object
*/

console.log(contact.name);
contact.city = "Daejeon";
console.log(contact);
// ✅ WRITE YOUR CODE UNDER THIS LINE

/* -----------------------------------------
   STEP 3 — Add new properties
   -----------------------------------------
   1) Add a new property called email
   2) Add a new property called isFavorite (boolean)
   3) console.log the updated object
*/

contact["email"] = "hojunekim@mail.com";
contact["isFavourite"] = true;

console.log(contact);

// ✅ WRITE YOUR CODE UNDER THIS LINE

/* -----------------------------------------
   STEP 4 — Bracket notation
   -----------------------------------------
   Sometimes you have a property name as a string.

   1) Create a variable called keyName with value "phone"
   2) console.log contact[keyName]
*/

let keyName = "phone";
console.log(contact[keyName]);

// ✅ WRITE YOUR CODE UNDER THIS LINE

/* -----------------------------------------
   STEP 5 — Loop through the object (for...in)
   -----------------------------------------
   Use for...in to log:
   - each key
   - each value

   Example output:
   "name => Ana"
*/

for (let key in contact){
   console.log(`${key} => ${contact[key]}`);
}

// ✅ WRITE YOUR CODE UNDER THIS LINE

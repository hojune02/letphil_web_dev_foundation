/*
  PROJECT 01 — Click Counter + Toggle Panel 

  ✅ You are practicing the most common event:
  👉 "click"

  You will build 3 things:
  1) A button that increases a counter every time you click
  2) A reset button that sets the counter back to 0
  3) A toggle button that shows/hides a panel

  IMPORTANT:
  - You will use `addEventListener("click", function(){ ... })`
  - You will update text on the page using `textContent`
  - You will show/hide something by adding/removing a CSS class
*/

// =====================================================
// STEP 1) SELECT the DOM elements you need
// -----------------------------------------------------
// ✅ Goal: store these elements in variables so you can use them in JS.
//
// You need to select:
// - #countValue
// - #increaseBtn
// - #resetBtn
// - #toggleBtn
// - #panel
// - #debugText
//
// 💡 Tip: Use document.querySelector("...")
// =====================================================

let countValue = document.querySelector("#countValue");
let increaseBtn = document.querySelector("#increaseBtn");
let resetBtn = document.querySelector("#resetBtn");
let toggleBtn = document.querySelector("#toggleBtn");
let panel = document.querySelector("#panel");
let debugText = document.querySelector("#debugText");

// ✅ WRITE YOUR CODE UNDER THIS LINE

// =====================================================
// STEP 2) CREATE a "state" variable to track the count
// -----------------------------------------------------
// ✅ Goal: create a number variable that starts at 0.
// Name it: `count`
//
// Why?
/*
  The page shows a number, but JavaScript also needs to remember that number.
  This variable is your "memory".
*/
// =====================================================
let count = 0;

// ✅ WRITE YOUR CODE UNDER THIS LINE

// =====================================================
// STEP 3) CLICK EVENT: Increase button
// -----------------------------------------------------
// ✅ Goal: when the user clicks the +1 button:
//
// 1) increase `count` by 1
// 2) update #countValue.textContent to show the new number
// 3) console.log the new count (for debugging)
// 4) also update the #debugText to say: "Last action: +1"
//
// 💡 Tip: increase count with: count = count + 1  (or count += 1)
// =====================================================

increaseBtn.addEventListener("click", function(){
  count += 1;
  countValue.textContent = count;
  console.log("New count: ", count);
  debugText.textContent = "Last action: +1";
})

// ✅ WRITE YOUR CODE UNDER THIS LINE

// =====================================================
// STEP 4) CLICK EVENT: Reset button
// -----------------------------------------------------
// ✅ Goal: when the user clicks Reset:
//
// 1) set `count` back to 0
// 2) update the UI (#countValue)
// 3) console.log a reset message
// 4) update #debugText to say: "Last action: reset"
// =====================================================
resetBtn.addEventListener("click", function(){
  count = 0;
  countValue.textContent = count;
  console.log("Reset!");
  debugText.textContent = "Last action: reset";
})

// ✅ WRITE YOUR CODE UNDER THIS LINE

// =====================================================
// STEP 5) CLICK EVENT: Toggle the panel
// -----------------------------------------------------
// ✅ Goal: when the user clicks Toggle Panel:
//
// The panel has a class called `isHidden`.
// - If it HAS that class -> remove it (show it)
// - If it DOES NOT have that class -> add it (hide it)
//
// 💡 Tip: use classList.toggle("isHidden")
// Then update #debugText to say either:
// - "Last action: panel shown"
// - "Last action: panel hidden"
//
// 💡 Hint: toggle() returns true/false depending on if the class is now present.
// =====================================================
toggleBtn.addEventListener("click", function() {
  panel.classList.toggle("isHidden");
  if (panel.classList.contains("isHidden")){
    debugText.textContent = "Last action: panel hidden";
  } else {
    debugText.textContent = "Last action: panel shown";
  }
})

// ✅ WRITE YOUR CODE UNDER THIS LINE

// =====================================================
// STEP 6) DEBUG CHECK (optional but recommended)
// -----------------------------------------------------
// ✅ Goal: console.log the elements so you can confirm your selectors worked.
// Example:
// console.log(countValueEl, increaseBtnEl, ...)
// =====================================================


// ✅ WRITE YOUR CODE UNDER THIS LINE

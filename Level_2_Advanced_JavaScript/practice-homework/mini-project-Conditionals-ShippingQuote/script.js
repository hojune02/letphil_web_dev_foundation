/*
Mini Project — Shipping Quote 

Goal
  Use if/else chains, combined conditions, and a ternary to compute a simple shipping quote with a breakdown.

Exact element ids required
  weightInput, distanceInput, isMemberInput, quoteBtn, output

STEP 1 — Selection
  Select elements by id and store them with the exact names above.

STEP 2 — Base numbers
  baseFee equals 5
  perKg equals 1.2

STEP 3 — Validation
  If weight is not greater than 0 or distance is not greater than 0, show Enter valid values and stop.

STEP 4 — Distance surcharge
  Create a variable named surcharge.
  When distance is greater than 1000, surcharge equals 15.
  Otherwise when distance is greater than 500, surcharge equals 7.
  Otherwise surcharge equals 0.

STEP 5 — Oversize fee
  Create a variable named oversize that equals 10 when weight is greater than 20, otherwise 0.

STEP 6 — Member discount
  Use a variable named discountRate that equals 0.10 when isMemberInput is checked, otherwise 0.
  Compute preDiscount as baseFee plus weight multiplied by perKg plus surcharge plus oversize.
  discountAmount equals preDiscount multiplied by discountRate.
  total equals preDiscount minus discountAmount.

STEP 7 — Output
  Build exactly these lines and show them in the output area:
    Shipping Quote
    Base: $<baseFee to two decimals>
    Weight: $<weight * perKg to two decimals>
    Surcharge: $<surcharge to two decimals>
    Oversize: $<oversize to two decimals>
    Discount: -$<discountAmount to two decimals>
    Total: $<total to two decimals>

STEP 8 — Wiring
  When quoteBtn is clicked, compute and show the quote.
*/

let weightInput = document.getElementById("weightInput");
let distanceInput = document.getElementById("distanceInput");
let isMemberInput = document.getElementById("isMemberInput");
let quoteBtn = document.getElementById("quoteBtn");let output = document.getElementById("output");



quoteBtn.addEventListener("click", () => {

  let baseFee = 5;
  let perKg = 1.2;

  let weight = Number(weightInput.value);
  let dist = Number(distanceInput.value);
  let isMember = isMemberInput.checked;
  console.log(isMember);

  if (Number(weightInput.value) < 0 || Number(distanceInput.value) < 0){
    output.textContent = "Enter valid values";
  } 

  let surcharge = dist > 1000 ? 15 : (dist > 500 ? 7 : 0);

  let oversize = weight > 20 ? 10 : 0;

  let discountRate = isMember ? 0.10 : 0;
  let preDiscount = baseFee + weight * perKg + surcharge + oversize;
  let discountAmount = preDiscount * discountRate;
  let total = preDiscount - discountAmount;

  output.textContent = `
    Base: \$${baseFee.toFixed(2)}
    Weight: \$${(weight * perKg).toFixed(2)}
    Surchage: \$${surcharge.toFixed(2)}
    Oversize: \$${oversize.toFixed(2)}
    Discount: -\$${discountAmount.toFixed(2)}
    Total: \$${total.toFixed(2)}
  `;
})






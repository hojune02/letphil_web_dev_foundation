/*
Mini Project — Shopping List Manager 

Goal
  Manage a list of strings with add, remove last, and clear actions; render the list and count.

Exact element ids required
  itemInput, addBtn, removeBtn, clearBtn, list, countLabel

STEP 1 — Data and selection
  Create an empty list named items.
  Select the elements by id and store them with the exact names above.


STEP 2 — Render helper
  Create a function named renderAll that clears the list, appends one list item per string in items, and updates countLabel to show Count: a space and the number of items.

STEP 3 — Add
  Create a function named handleAdd that reads trimmed text from itemInput.
  When the trimmed text is not empty, add it to the end of items and render.

STEP 4 — Remove Last
  Create a function named handleRemove that removes the last item from items when it exists and render.

STEP 5 — Clear
  Create a function named handleClear that empties items and render.

STEP 6 — Wiring
  Wire addBtn to handleAdd, removeBtn to handleRemove, and clearBtn to handleClear.
  Call renderAll once so the page reflects the current state.
*/

let items = [];

let itemInput = document.getElementById("itemInput");
let addBtn = document.getElementById("addBtn");
let removeBtn = document.getElementById("removeBtn");
let clearBtn = document.getElementById("clearBtn");
let list = document.getElementById("list");
let countLabel = document.getElementById("countLabel");

function renderAll() {
  list.innerHTML = "";

  let count = 0;
  for (let item of items){
    let newItem = document.createElement("li");
    newItem.textContent = item;
    list.appendChild(newItem);
    count++;
  }

  countLabel.textContent = `Count: ${count}`;
}

function handleAdd() {
  let value = itemInput.value.trim();
  if (value !== ""){
    items.push(value);
    renderAll();
  }
}

function handleRemove(){
  if (items.length > 0){
    items.pop();
    renderAll();
  }

}

function handleClear(){
  items = [];
  renderAll();
}

addBtn.addEventListener("click", handleAdd);
removeBtn.addEventListener("click", handleRemove);
clearBtn.addEventListener("click", handleClear);
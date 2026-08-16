// Goal: Practice Events & DOM by wiring up interactions in a small app.

// -----------------------------------------------------------------------
// STEP A — SELECT ELEMENTS
// - Select by id: btnIncrement, countValue
// - Select by id: btnTheme
// - Select by id: taskInput, prioritySelect, priorityLabel, btnAdd, taskList
// - Select by id: demoForm, nameInput, formMsg
// - Select by id: hoverCard

// -----------------------------------------------------------------------
// STEP B — CLICK: COUNTER
// - Add a click listener to btnIncrement
// - Read current number from countValue (parseInt)
// - Increase by 1 and put it back (textContent)

// -----------------------------------------------------------------------
// STEP C — THEME TOGGLE
// - Add a click listener to btnTheme
// - Toggle the "dark" class on <body> using classList.toggle

// -----------------------------------------------------------------------
// STEP D — INPUT + CHANGE + ENTER KEY
// - Add an input listener to taskInput (optional: show live length/preview)
// - Add a change listener to prioritySelect to update priorityLabel to "Priority: X"
// - Add a keydown listener to taskInput that checks if key === "Enter"; if so, call addTask()

// -----------------------------------------------------------------------
// STEP E — CREATE TASK ELEMENTS
// - Write a function addTask() that:
//   * Reads values from taskInput and prioritySelect
//   * Creates a new <li>, sets text to the task
//   * Creates a <span class="badge"> for the priority and appends it
//   * Creates a <button> "Delete" with a data-action="delete"
//   * Appends <li> to taskList
//   * Clears taskInput and focuses it again

// -----------------------------------------------------------------------
// STEP F — EVENT DELEGATION FOR DELETE
// - Add one click listener to taskList (the <ul>)
// - Inside, check if event.target has data-action="delete"
// - If yes, remove the parent <li>

// -----------------------------------------------------------------------
// STEP G — FORM SUBMIT (PREVENT DEFAULT)
// - Add submit listener to demoForm
// - Use event.preventDefault() to stop page reload
// - Build a friendly text using nameInput.value and show it in formMsg
// - Optionally clear the input

// -----------------------------------------------------------------------
// STEP H — MOUSEOVER / MOUSEOUT
// - Add mouseover listener to hoverCard to add class "highlight"
// - Add mouseout listener to remove class "highlight"

// -----------------------------------------------------------------------
// STEP I — BONUS IDEAS
// - Disable Add button when input is empty (use .disabled = true/false)
// - Pressing Ctrl+Enter adds a task with "High" priority automatically
// - Persist tasks to localStorage and load them on page load

let btnIncrement = document.getElementById("btnIncrement");
let countValue = document.getElementById("countValue");
const previewList = document.getElementById("previewList");


let btnTheme = document.getElementById("btnTheme");


let taskInput = document.getElementById("taskInput");
let prioritySelect = document.getElementById("prioritySelect");
let priorityLabel = document.getElementById("priorityLabel");
let btnAdd = document.getElementById("btnAdd");
let taskList = document.getElementById("taskList");


let demoForm = document.getElementById("demoForm");
let nameInput = document.getElementById("nameInput");
let formMsg = document.getElementById("formMsg");
let hoverCard = document.getElementById("hoverCard");

btnIncrement.addEventListener("click", () => {
    let parseInt = Number(countValue.textContent);
    parseInt++;
    countValue.textContent = parseInt;
})

btnTheme.addEventListener("click", () => {
    let body = document.querySelector("body");
    body.classList.toggle("dark");
})


// Preview task just as how it would be added

function createTaskElement(taskValue, priorityValue, isPreview = false) {
    const newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(taskValue + " "));

    const newSpan = document.createElement("span");
    newSpan.classList.add("badge");
    newSpan.textContent = `Priority: ${priorityValue}`;
    newItem.appendChild(newSpan);

    // Only real tasks receive a Delete button
    if (!isPreview) {
        const delBtn = document.createElement("button");
        delBtn.dataset.action = "delete";
        delBtn.textContent = "Delete";
        newItem.appendChild(delBtn);
    }

    return newItem;
}
function updatePreview() {
    const taskValue = taskInput.value.trim();
    const priorityValue = prioritySelect.value;

    previewList.replaceChildren();

    if (taskValue === "") {
        return;
    }

    const previewItem = createTaskElement(
        taskValue,
        priorityValue,
        true
    );

    previewList.appendChild(previewItem);
}

prioritySelect.addEventListener("change", () => {
    priorityLabel.textContent =
        `Priority: ${prioritySelect.value}`;

    updatePreview();
});

let priorityBeforeCtrl = prioritySelect.value;
let isCtrlHeld = false;
taskInput.addEventListener("input", function (){
    if (taskInput.value === ""){
        btnAdd.disabled = true;
    } else {
        btnAdd.disabled = false;
    }
    updatePreview();
});
taskInput.addEventListener("keydown", (event) => {
    if (event.ctrlKey && !isCtrlHeld){
        isCtrlHeld = true;
        priorityBeforeCtrl = prioritySelect.value;
        prioritySelect.value = "high";
        priorityLabel.textContent = "Priority: high";
        updatePreview();
    }
    if (event.key === "Enter"){
        previewList.replaceChildren();
        addTask();
    }
})
// To revert to the original priority label when ctrl is released
taskInput.addEventListener("keyup", (event) => {
    if (event.key === "Control"){
        isCtrlHeld = false;
        prioritySelect.value = priorityBeforeCtrl;
        priorityLabel.textContent =
            `Priority: ${priorityBeforeCtrl}`;

        updatePreview();
    }
})


function addTask(){
    let taskValue = taskInput.value;
    let priorityValue = prioritySelect.value;

    let newItem = document.createElement("li");
    newItem.textContent = taskValue;
    let newSpan = document.createElement("span");
    newSpan.classList.add("badge");
    newSpan.textContent = "Priority: " + priorityValue;
    newItem.appendChild(newSpan);

    let delBtn = document.createElement("button");
    delBtn.setAttribute("data-action", "delete");
    delBtn.textContent = "Delete";
    newItem.appendChild(delBtn);

    taskList.appendChild(newItem);
    taskInput.value = "";
    prioritySelect.value = priorityBeforeCtrl;
}

taskList.addEventListener("click", (event) => {
    if (event.target.getAttribute("data-action") === "delete"){
        event.target.closest("li").remove();
    }
});

demoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMsg.textContent = "Nice submission, " + nameInput.value + "!";

    nameInput.value = "";
})

hoverCard.addEventListener("mouseover", () => {
    hoverCard.classList.add("highlight");
})

hoverCard.addEventListener("mouseout", () => {
    hoverCard.classList.remove("highlight");
})




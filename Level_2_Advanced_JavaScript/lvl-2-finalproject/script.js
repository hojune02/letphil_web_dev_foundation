import APIKEY from './secret.js'

/* Navigation */
let weatherBtn = document.getElementById("weatherBtn");
let todoBtn = document.getElementById("todoBtn");
let notesBtn = document.getElementById("notesBtn");

let pages = document.querySelectorAll(".page");

/*
Navigation using setPage
*/
function setPage(button){
    let pageType = button.dataset.page;
    
    pages.forEach((page) => {
        page.classList.remove("active");
    })
    
    document.getElementById(pageType).classList.add("active");
    if (pageType === "todoPage"){
        renderTodos();
    } else if (pageType === "notesPage"){
        renderNotes();
    }
}

weatherBtn.addEventListener("click", () => {setPage(weatherBtn)});
todoBtn.addEventListener("click", () => {setPage(todoBtn)});
notesBtn.addEventListener("click", () => {setPage(notesBtn)});

/*
Weather

It first geocodes user's input (city name) to convert it into latitude and longitude, which is then used to fetch weather data using "Current Weather Data" API on OpenWeather.

*/

let cityInput = document.getElementById("cityInput");
let weatherPanel = document.getElementById("weatherPanel");
let cityBtn = document.getElementById("cityBtn");
let weatherStatus = document.getElementById("weatherStatus");

async function geocodingFetch(){
    try {
        let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityInput.value}&limit=5&appid=${APIKEY}`);

        let jsonRes = await response.json();

        return jsonRes;

    } catch (error) {
        return "Error occurred: " + error;  
    }
}

async function weatherFetch(){

    try {

        let geocoding = await geocodingFetch();
        let lat = geocoding[1].lat;
        let lon = geocoding[1].lon;
        console.log(`lat: ${lat}`);

        let response = await fetch(`https://api.openweathermap.org/data/4.0/onecall/current?lat=${lat}&lon=${lon}&units=metric&appid=${APIKEY}`);

        let jsonRes = await response.json();

        return jsonRes
    } catch (error) {
        return "Error occurred: " + error;
    }
}

async function renderWeather(){
    weatherStatus.innerHTML = "";

    if (cityInput.value === ""){
        return;
    }

    try {
        let response = await weatherFetch();

        let data = response.data[0];
        let weather = JSON.stringify(data.weather);

        let strData = JSON.stringify(data);

        weatherStatus.innerHTML = `
            <h3>Current Weather in ${cityInput.value}</h3>
        `;
        for (let key in data){
            let newItem = document.createElement("div");
            if (key === "dt" || key === "sunrise" || key === "sunset"){
                let dateTime = new Date(data[key] * 1000);

                newItem.textContent = `${key}: ${dateTime.toLocaleString()}`;
            } else if (key === "weather"){
                newItem.textContent = `${key}: ${weather}`;
            } else {
                newItem.textContent = `${key}: ${data[key]}`;
            }
            weatherStatus.appendChild(newItem);
        }
        weatherPanel.appendChild(weatherStatus);
    } catch (error) {
        weatherStatus.innerHTML = `
            <p>Error occurred: ${error}</p>
        `;

        weatherPanel.appendChild(weatherStatus);

        setTimeout(setPage(weatherBtn), 2000);
    }
}

cityBtn.addEventListener("click", renderWeather);
cityInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        renderWeather();
    }
});

/*
To-do List

- localStorage usage
- Edit, Delete functionalities
- Clear modularisation with addNotes(), saveNotes(), and renderNotes()
*/

let todoList = document.getElementById("todos");
let taskBtn = document.getElementById("taskBtn");
let taskInput = document.getElementById("task");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function addTodo(){

    let task = taskInput.value;

    if (task === ""){
        return;
    }
    
    todos.push({
        task: task
    });

    saveTodos();

    renderTodos();

    taskInput.value = "";
}

function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos(){
    todoList.innerHTML = "";

    todos.forEach((todo, index) => {

        let listItem = document.createElement("li");

        let taskElement = document.createElement("span");
        taskElement.textContent = todo.task;

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";

        let delBtn = document.createElement("button");
        delBtn.textContent = "Delete";


        // =========================
        // EDIT
        // =========================

        editBtn.addEventListener("click", () => {

            let newTaskInput = document.createElement("input");

            newTaskInput.value = todo.task;

            taskElement.replaceWith(newTaskInput);


            let editFinishedBtn = document.createElement("button");
            editFinishedBtn.textContent = "Finish Edit";

            editBtn.replaceWith(editFinishedBtn);


            editFinishedBtn.addEventListener("click", () => {

                let newTask = newTaskInput.value;

                if (newTask === "") {
                    return;
                }

                // Update array
                todos[index].task = newTask;

                // Save updated array
                saveTodos();

                // Re-render everything
                renderTodos();
            });
        });


        // =========================
        // DELETE
        // =========================

        delBtn.addEventListener("click", () => {

            // Remove this todo from array
            todos.splice(index, 1);

            // Save new array
            saveTodos();

            // Re-render
            renderTodos();
        });


        listItem.appendChild(taskElement);
        listItem.appendChild(editBtn);
        listItem.appendChild(delBtn);

        todoList.appendChild(listItem);
    });
}

taskBtn.addEventListener("click", addTodo);
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        addTodo();
    }
});

/*
Notes

- localStorage usage
- Edit, Delete functionalities
- Clear modularisation with addNotes(), saveNotes(), and renderNotes()
*/

let noteTitle = document.getElementById("noteTitle");
let noteContent = document.getElementById("noteContent");
let noteBtn = document.getElementById("noteBtn");
let noteList = document.getElementById("notes");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function addNotes(){
    let title = noteTitle.value;
    let content = noteContent.value;

    if (title === "" || content === ""){
        return;
    }

    notes.push({
        title: title,
        content: content,
    });

    saveNotes();

    renderNotes();

    noteTitle.value = "";
    noteContent.value = "";
}

function saveNotes(){
    localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes(){
    noteList.innerHTML = "";

    notes.forEach((note, index) => {
        let title = note.title;
        let content = note.content;

        let newNoteItem = document.createElement("li");
        let titleElem = document.createElement("h4");
        titleElem.textContent = title;
        let contentElem = document.createElement("p");
        contentElem.textContent = content;

        let editNoteBtn = document.createElement("button");
        editNoteBtn.textContent = "Edit";
        editNoteBtn.addEventListener("click", () => {
            let newNoteTitle = document.createElement("input");
            newNoteTitle.setAttribute("type", "text");
            newNoteTitle.value = title;

            titleElem.replaceWith(newNoteTitle);


            let newNoteContent = document.createElement("input");
            newNoteTitle.setAttribute("type", "text");
            newNoteContent.value = content;

            contentElem.replaceWith(newNoteContent);

            let editFinishedBtn = document.createElement("button");
            editFinishedBtn.textContent = "Submit Edit";

            editNoteBtn.replaceWith(editFinishedBtn);
            
            editFinishedBtn.addEventListener("click", () => {
                let newTitle = newNoteTitle.value;

                let newContent = newNoteContent.value;

                if (newTitle === "" || newContent === ""){
                    return;
                }

                notes[index] = {
                    title: newTitle,
                    content: newContent
                };

                saveNotes();

                renderNotes();
            })
        });

        let delNoteBtn = document.createElement("button");
        delNoteBtn.textContent = "Delete";

        delNoteBtn.addEventListener("click", () => {
            notes.splice(index, 1);

            saveNotes();

            renderNotes();
        })


        newNoteItem.appendChild(titleElem);
        newNoteItem.appendChild(contentElem);
        newNoteItem.appendChild(editNoteBtn);
        newNoteItem.appendChild(delNoteBtn);
        noteList.appendChild(newNoteItem);
    })
}

noteBtn.addEventListener("click", addNotes);
noteTitle.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        if (noteTitle.value !== "" && noteContent.value !== ""){
            addNotes();
        }
    }
});
noteContent.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        if (noteTitle.value !== "" && noteContent.value !== ""){
            addNotes();
        }
    }
});









/* Navigation */
let weatherBtn = document.getElementById("weatherBtn");
let todoBtn = document.getElementById("todoBtn");
let notesBtn = document.getElementById("notesBtn");

let pages = document.querySelectorAll(".page");

let todoList = document.getElementById("todos");
let taskBtn = document.getElementById("taskBtn");
let taskInput = document.getElementById("task");

/*
Navigation using setPage
*/
function setPage(button){
    let pageType = button.dataset.page;

    pages.forEach((page) => {
        page.classList.remove("active");
    })

    document.getElementById(pageType).classList.add("active")
}

weatherBtn.addEventListener("click", () => {setPage(weatherBtn)});
todoBtn.addEventListener("click", () => {setPage(todoBtn)});
notesBtn.addEventListener("click", () => {setPage(notesBtn)});

/*
Geocoding API for converting city names into longitudes and latitudes
*/

// async function geolocate(city){
//     let response = await fetch(`https://api.openweathermap.org/data/4.0/onecall/current?lat=52.2297&lon=21.0122&units=metric&lang=en&appid=${APIKEY} `);

//     let jsonRes = await response.json();

//     console.log(jsonRes);
// }

// geolocate("Seoul");

/*
Make a <li> item for todo tasks
*/

function addTodo(){

    let task = taskInput.value;


    let listItem = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    listItem.innerHTML = `
        <span id="taskIten">${task}<span>
    `;

    delBtn.addEventListener("click", (event) => {
        let li = event.target.closest("li");
        li.remove();
    });
    listItem.appendChild(delBtn);

    

    todoList.appendChild(listItem);
}

taskBtn.addEventListener("click", addTodo);






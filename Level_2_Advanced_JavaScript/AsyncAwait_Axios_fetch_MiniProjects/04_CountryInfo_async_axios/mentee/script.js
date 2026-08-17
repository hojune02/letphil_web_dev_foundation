
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <title>Country Info Finder</title>
//     <link rel="stylesheet" href="styles.css" />
//     <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
//   </head>
//   <body>
//     <div class="container">
//       <h1>Country Info Finder</h1>
//       <input type="text" id="countryInput" placeholder="Enter country name" />
//       <button id="searchBtn">Search</button>
//       <div id="countryDisplay" class="card"></div>
//     </div>
//     <script src="script.js"></script>
//   </body>
// </html>

// 🧠 STEP 1: Select the input, button, and display container using document.getElementById
// - We're grabbing references to HTML elements so we can interact with them in JavaScript.
// - `getElementById("id")` lets us target elements using their `id` attribute from the HTML.
// The text input where the user types the country name (e.g., "Mexico")
// The button the user clicks to trigger the API call
// The div where we’ll show the country info (flag, name, capital, etc.)

let countryInput = document.getElementById("countryInput");
let searchBtn = document.getElementById("searchBtn");
let countryDisplay = document.getElementById("countryDisplay");


// 🧠 STEP 2: Add an event listener that waits for the button to be clicked
// - `addEventListener("click", ...)` runs a function every time the button is clicked
// - We mark the function as `async` so we can use `await` inside it (to pause until the API responds)
searchBtn.addEventListener("click", searchAction);

// 🧠 STEP 3: Get the country name that the user typed
// - `.value` gets the current text inside the input box
// - `.trim()` removes any extra spaces before or after (e.g., " Mexico " → "Mexico")
// 🧠 STEP 4: Build the API URL
// - We insert the country name into the REST Countries API URL using a template literal (`...`)
// - Example result: https://restcountries.com/v3.1/name/mexico
// 🧠 STEP 5: Use axios to fetch data from the API
// - `axios.get(url)` sends a GET request to the API and returns a Promise
// - `await` tells JavaScript to "pause here" until the API sends back the data
// 🧠 STEP 6: Extract useful data from the API response
// - `response.data` is an array of country objects; we use the first one with [0]
// - `data.name.common` gives us the country's name (e.g., "Mexico")
// - `data.capital[0]` gives us the first capital city (e.g., "Mexico City")
// - `data.population` gives us the number of people in the country
// - `.toLocaleString()` adds commas (e.g., 128932753 → 128,932,753)
// - `data.flags.svg` is the URL of the flag image
// 🧠 STEP 7: Show the country info on the web page using innerHTML
// - innerHTML lets us insert HTML elements as a string
// - We use backticks `` and ${} to insert variables inside the HTML string
// 🧠 STEP 8: If something goes wrong (e.g., country not found), show an error message
// - The error might be because the country doesn't exist or the API is down
async function searchAction(){
  let country = countryInput.value.trim();
  try {
    let response = await fetch(
      `https://api.restcountries.com/countries/v5?q=${country}`,
      { headers: { 'Authorization': 'Bearer rc_live_a4153f3240634671a5d6a767307da2ea' } }
    );
    response = await response.json();
    console.log(JSON.stringify(response));
    let data = response.data;

    let countryName = data.objects[0].names.common;
    let countryCapital = data.objects[0].capitals[0].name;
    let countryPopulation = data.objects[0].population.toLocaleString();
    let countryFlag = data.objects[0].flag.url_svg;

    countryDisplay.innerHTML = `
      <h2>Name : ${countryName}<h2>
      <p>Capital : ${countryCapital}</p>
      <p>Population : ${countryPopulation}</p>
      <img src="${countryFlag}" alt="country flag" style="width: 100%; border-radius: 8px; border: 1px solid black;"/>
    `;

  } catch (error) {
    countryDisplay.innerHTML = `
      <h2>Error occurred:  ${error}<h2>
    `;
  }

}

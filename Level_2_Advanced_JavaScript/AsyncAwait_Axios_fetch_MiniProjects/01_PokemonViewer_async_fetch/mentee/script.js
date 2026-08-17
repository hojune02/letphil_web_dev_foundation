// 🧠 STEP 1: Get references to the HTML elements by their ID
// - This lets us access the user's input, the button they click, and where we’ll display the result.
// The text input where the user types the Pokémon's name
// The button the user clicks to trigger the search
// The container (div) where we'll show the Pokémon info

let pokemonInput = document.getElementById("pokemonInput");
let searchBtn = document.getElementById("searchBtn");
let result = document.getElementById("result");

// 🧠 STEP 2: Add a click event listener to the button
// - This means: "When the button is clicked, run this function."

searchBtn.addEventListener("click", searchAction);
// 🧠 STEP 3: Get what the user typed from the input field
// - .value gets the text the user entered
// - .toLowerCase() converts it to lowercase so the API matches (e.g., "Pikachu" → "pikachu")
// - .trim() removes any extra spaces before or after
// 🧠 STEP 4: Create the URL we’ll use to fetch from the PokéAPI
// - We insert the user’s input into the URL using backticks and ${} - `https://pokeapi.co/api/v2/pokemon/${name}`
// 🧠 STEP 5: Fetch data from the PokéAPI using await
// - We "pause" here until the response comes back
// - fetch() sends a request to the URL
// 🧠 STEP 6: Check if the response was successful
// - If not, throw an error message that we’ll catch later
async function searchAction(){
    let name = pokemonInput.value.toLowerCase().trim();
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        let jsonRes = await response.json();
        let imgUrl = jsonRes.sprites.front_default;
        let type = jsonRes.types[0];
        console.log("Image URL: ", imgUrl);
        console.log("Type: ", type);

        result.innerHTML = "";
        result.innerHTML = `
            <img src="${imgUrl}" alt="search result" width=400 height=400 />
            <p> Type: ${type.type.name}</p>

        `;
    } catch (error) {
        console.log(error);
        result.innerHTML = "";
        result.innerHTML = `

            <p> Error: ${error}</p>

        `;
    }

}
// 🧠 STEP 6.5: Convert the response to JSON so we can use the data
// - .json() is another async method, so we use await again

// 🧠 STEP 7: Pull out the info we need from the API response
// - data.sprites.front_default is the image URL of the Pokémon
// - data.types is an array, so we get the first type using [0]

// 🧠 STEP 8: Update the HTML of the result div with the Pokémon's info
// - We use backticks (`) and ${} to insert values into HTML

// 🧠 STEP 9: If something goes wrong, show the error message to the user
// - This could happen if the Pokémon doesn’t exist or the API is down


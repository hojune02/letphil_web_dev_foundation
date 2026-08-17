// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <title>Crypto Price Checker</title>
//     <link rel="stylesheet" href="styles.css" />
//     <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
//   </head>
//   <body>
//     <div class="container">
//       <h1>Crypto Price Checker</h1>
//       <select id="cryptoSelect">
//         <option value="bitcoin">Bitcoin</option>
//         <option value="ethereum">Ethereum</option>
//         <option value="litecoin">Litecoin</option>
//       </select>
//       <button id="checkBtn">Check Price</button>
//       <div id="priceDisplay" class="card"></div>
//     </div>
//     <script src="script.js"></script>
//   </body>
// </html>
// 🧠 STEP 1: Select dropdown, button, and result display element
// - These elements let us interact with what the user selects and where to show the data
// User selects the crypto coin
// Button the user clicks to check price
// Where we show the result
let cryptoSelect = document.getElementById
("cryptoSelect");
let checkBtn = document.getElementById
("checkBtn");
let priceDisplay = document.getElementById
("priceDisplay");


// 🧠 STEP 2: Add a click event listener to the button
// - When the user clicks the button, we start the async function
checkBtn.addEventListener("click", checkAction);

// 🧠 STEP 3: Get the selected crypto symbol from the dropdown
// - .value gets the current choice, e.g. "bitcoin"

// 🧠 STEP 4: Build the API URL using a template string
// - The CoinGecko API needs the coin name in the URL - `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`

// 🧠 STEP 5: Use axios.get to fetch the price data
// - await pauses until the data is returned

// 🧠 STEP 6: Extract the USD price from the returned data
// - response.data[crypto].usd gives the price of the selected coin

// 🧠 STEP 7: Show the result on the page using innerHTML
// - We use backticks and ${} to insert dynamic values

// 🧠 STEP 8: Show an error message if the fetch fails



async function checkAction(){
  let toBeChecked = cryptoSelect.value;
  try {
    let response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${toBeChecked}&vs_currencies=usd`);
    
    let price = response.data[toBeChecked].usd;

    priceDisplay.innerHTML = `
      <p> Price: \$${price} </p>
      
    `;

  } catch (error) {
    priceDisplay.innerHTML = `<p> Error occurred: ${error} </p>`;
  }


}

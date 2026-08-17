// 🧠 STEP 1: Create an Axios helper instance
// - Write: const api = axios.create({...})
// - Inside axios.create(), pass an object with:
//   • Key: baseURL
//   • Value: "https://coinbase.com/api/v2/assets/prices"
const api = axios.create({baseURL: "https://coinbase.com/api/v2/assets/prices"});

// 🧠 STEP 2: Make an array called "coins"
// - Store the IDs of the cryptocurrencies you want to track (e.g., "bitcoin", "ethereum").
const coins = ["bitcoin", "ethereum"];

// 🧠 STEP 3: Write a function called "createChart"
// - Parameters: (Chart, coinId, labels, data, symbol)
// - Inside this function:
//   1. Use document.getElementById() to select the container where charts will go.
//   2. Use document.createElement("canvas") to make a canvas element.
//   3. Set the canvas id to coinId and append it to the container.
//   4. Use new Chart(canvas, {...}) to create a line chart.
//   5. Pass in labels (X-axis) and data (Y-axis) from the API response.
//   6. Use symbol for the dataset label and give it a color (e.g., blue).
function createChart(Chart, coinId, labels, data, symbol){
    let chartSection = document.getElementById("chartSection");
    let canvas = document.createElement("canvas");
    canvas.id = coinId;
    chartSection.appendChild(canvas);

    return new Chart(canvas, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: symbol,
                    data: data,
                    borderColor: "rgb(54, 162, 235)",
                    backgroundColor: "rgba(54, 162, 235, 0.2)",
                    tension: 0.1
                }
            ]
        }
    });

}
// 🧠 STEP 4: Write an async function called "makeCharts"
// - Inside this function:
//   1. Select the chart container and set innerHTML to a loader (e.g., "<div class='loader'></div>").
//   2. Use Promise.all() with coins.map() to fetch all coin data at once.
//   3. For each coin inside map():
//      • Call api.get("/" + coin).
//      • Extract response.data.data.prices.hour.prices and use slice(0, 24).
//      • Map timestamps to readable times using new Date(timestamp * 1000).toLocaleTimeString().
//      • Map prices to numbers using Number(price).
//      • Return an object containing coinId, labels, data, and symbol.
//   4. After fetching all data, clear the loader (innerHTML = "").
//   5. Loop over the returned data with forEach() and call createChart() for each coin.

async function makeCharts(){
    const chartSection = document.getElementById("chartSection");
    chartSection.innerHTML = `
        <div class='loader'></div>
    `;

    try {
        let promises = coins.map(async (coin) => {
            const response = await api.get("/" + coin);

            let prices = response.data.data.prices.hour.prices.slice(0, 24).reverse();
            console.log(prices[23], prices[0]);

            let readableTimes = prices.map((price) => {
                return new Date(price[1] * 1000).toLocaleTimeString()
            });
            let data = prices.map((price) => {
                return Number(price[0]);
            });
            let symbol = response.data.data.base;

            return {coinId: coin, labels: readableTimes, data: data, symbol: symbol};
            

        })
        let results = await Promise.all(promises);

        chartSection.innerHTML = "";
        results.forEach((item) => {
            createChart(Chart, item.coinId, item.labels, item.data, item.symbol);
        })

    } catch (error) {
        console.log("Error occurred: ", error);
    }
}
makeCharts();
setInterval(makeCharts, 10000);

// 🧠 STEP 5: Call makeCharts() once to display charts immediately.
// - Use setInterval(makeCharts, 10000) to refresh every 10 seconds (10,000ms).

// ✅ IMPORTANT:
// - Use the given variable names exactly: api, coins, createChart, makeCharts.
// - Use the methods: axios.create, api.get, Promise.all, .map(), .forEach(), document.getElementById, document.createElement.
// - Follow these steps carefully to complete the project.

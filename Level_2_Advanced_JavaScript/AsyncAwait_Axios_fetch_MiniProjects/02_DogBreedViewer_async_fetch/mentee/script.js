// 🧠 STEP 1: Select the dropdown, button, and image container using document.getElementById
// - These elements let us know which breed the user picked, when to run the code, and where to display the dog image.

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>Dog Breed Viewer</title>
//   <link rel="stylesheet" href="styles.css">
// </head>
// <body>
//   <div class="container">
//     <h1>Dog Breed Viewer</h1>
//     <select id="breedSelect">
//       <option value="hound">Hound</option>
//       <option value="pug">Pug</option>
//       <option value="dalmatian">Dalmatian</option>
//       <option value="boxer">Boxer</option>
//     </select>
//     <button id="fetchBtn">Show Dog</button>
//     <div id="imageContainer" class="card"></div>
//   </div>
//   <script src="script.js"></script>
// </body>
// </html>

let breedSelect = document.getElementById("breedSelect");
let fetchBtn = document.getElementById("fetchBtn");
let imageContainer = document.getElementById("imageContainer");
// 🧠 STEP 2: Add an event listener to the button
// - This function will run every time the user clicks the "Show Dog" button.

fetchBtn.addEventListener("click", fetchAction);

// 🧠 STEP 3: Get the selected breed from the dropdown
// - .value gets the breed that the user chose (like "pug" or "dalmatian")
// 🧠 STEP 4: Build the API URL using the selected breed
// - We insert the breed into the URL using a template literal - `https://dog.ceo/api/breed/${breed}/images/random`
// 🧠 STEP 5: Use fetch() with await to get a random dog image
// - The fetch call waits for the response to come back from the Dog API
// 🧠 STEP 6: Convert the response into a JavaScript object
// - The .json() method returns a Promise, so we use await again
// 🧠 STEP 7: Get the image URL from the response data
// - The image URL is inside the "message" property
// 🧠 STEP 8: Display the image by setting the innerHTML of the container
// - We use an <img> tag with the URL and style it to fit nicely
// 🧠 STEP 9: If something goes wrong (like no internet), show an error message

async function fetchAction(){
  let breed = breedSelect.value;
  try {
    let response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    let jsonRes = await response.json();
    let imgUrl = jsonRes.message;

    imageContainer.innerHTML = `
      <img src="${imgUrl}" alt="breed" style="width: 100%; border-radius:8px;" />
    `;

    console.log(jsonRes);
  } catch (error) {
    imageContainer.innerHTML = `
    <p>Error occurred: ${error}</p>
  `;
  }
}


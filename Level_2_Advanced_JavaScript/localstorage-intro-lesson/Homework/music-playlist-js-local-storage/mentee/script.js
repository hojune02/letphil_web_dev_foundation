//  Step 1: Create an empty array to store songs.
// Each song will be an object with { title, artist, mood, link }
//  Declare a variable named "playlist" and set it to an empty array
// 🧪 Console log to confirm the playlist is initialized as an empty array

let playlist = [];
console.log(playlist);

//  Step 2: Get references to all the DOM elements (HTML elements we interact with)
//  Use document.getElementById() to store references to:
// - title input        → id="title"
// - artist input       → id="artist"
// - link input         → id="link"
// - mood dropdown      → id="mood"
// - form               → id="songForm"
// - playlist container → id="playlist"
// - filter dropdown    → id="filterMood"
// - shuffle button     → id="shuffleBtn"
// - dark mode button   → id="toggleModeBtn"
//  Console log to confirm all DOM elements were successfully selected

let title = document.getElementById("title");
let artist = document.getElementById("artist");
let link = document.getElementById("link");
let mood = document.getElementById("mood");
let songForm = document.getElementById("songForm");
let playlistElem = document.getElementById("playlist");
let filterMood = document.getElementById("filterMood");
let shuffleBtn = document.getElementById("shuffleBtn");
let toggleModeBtn = document.getElementById("toggleModeBtn");

// Step 3: Function to load the playlist from localStorage
//  Define a function called loadPlaylist()
// Inside the function:
// - Use localStorage.getItem("customPlaylist") to get the saved data
// - If there is data, parse it using JSON.parse()
// - Then update the playlist array with the parsed data
//  Console log to show the playlist loaded from localStorage
//  Console log to show that no playlist data was found (if none exists)
function loadPlaylist(){
  let saved = localStorage.getItem("customPlaylist");
  if (saved !== null){
    saved = JSON.parse(saved);
    playlist = saved;
    console.log(saved);
  }
  console.log(saved);
}

//  Step 4: Function to save the playlist into localStorage
//  Define a function called savePlaylist()
// Inside the function:
// - Use JSON.stringify() to convert the playlist array to a string
// - Use localStorage.setItem() to save it with the key "customPlaylist"
//  Console log to confirm playlist was saved to localStorage
function savePlaylist(){
  let strPlaylist = JSON.stringify(playlist);
  localStorage.setItem("customPlaylist", strPlaylist);
  console.log(localStorage.getItem("customPlaylist"));
}

//  Step 5: Function to render the songs onto the screen
//  Define a function called renderPlaylist(songsToRender)
// Inside the function:
// - First, clear the playlist container using innerHTML = ""
// - Use forEach to loop through each song and do the following:
function renderPlaylist(songsToRender){
  playlistElem.innerHTML = "";

  if (songsToRender.length === 0){
    return;
  }

  songsToRender.forEach((song, index) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("song-card");
    newDiv.innerHTML = `
      <strong>${song.title}</strong>
      <em>Artist:</em> ${song.artist}<br>
      <em>Mood:</em> ${song.mood}<br>
      <a href="${song.link}" target="_blank">🎧 Listen</a><br>
      <button class="delete-btn" data-index="${index}">🗑️ Delete</button>
    `;
    playlistElem.appendChild(newDiv);
    console.log(song);
  })

  let deleteBtns = document.querySelectorAll(".delete-btn");
  for (let deleteBtn of deleteBtns){
    deleteBtn.addEventListener("click", (event) => {
      let idx = Number(deleteBtn.getAttribute("data-index"));
      let del = playlist.splice(idx, 1);
      savePlaylist();
      loadPlaylist();
      renderPlaylist(playlist);
    })
  }
}

//  1. Create a new div using document.createElement("div")
//  2. Give it a class of "song-card" using classList.add()
//  3. Set its innerHTML using a template literal:
/*
  <strong>${song.title}</strong><br>
  <em>Artist:</em> ${song.artist}<br>
  <em>Mood:</em> ${song.mood}<br>
  <a href="${song.link}" target="_blank">🎧 Listen</a><br>
  <button class="delete-btn" data-index="${index}">🗑️ Delete</button>
*/

// 🔹 4. Append the new div to the playlist container
// 🧪 Console log to show which songs are being rendered

// 🧹 Then, after the forEach loop:
// - Use document.querySelectorAll(".delete-btn") to get all delete buttons
// - Loop through them and add a click event listener to each:
//    → Get the song index from data-index
//    → Remove the song from the playlist array using splice()
//    → Save and re-render the playlist again
// 🧪 Console log to confirm a song was deleted and show its index

// ➕ Step 6: Function to handle adding a new song
// 👉 Define a function called addSong(e)
// Inside the function:
// - Use e.preventDefault() to stop the form from refreshing
// - Create a new object with title, artist, mood, and link
// - Push it into the playlist array
// - Save the playlist
// - Call renderPlaylist(playlist)
// - Use songForm.reset() to clear the form
// 🧪 Console log to confirm a new song was added
function addSong(e){
  e.preventDefault();
  let newObj = {
    title: title.value,
    artist: artist.value,
    mood: mood.value,
    link: link.value
  };
  playlist.push(newObj);
  savePlaylist();
  renderPlaylist(playlist);
  songForm.reset();
  console.log("Added new song: ", newObj);
}

// 🎯 Step 7: Filter playlist by mood
// 👉 Define a function called filterPlaylist()
// Inside the function:
// - Get the selected value from filterMoodSelect
// - If it’s "all", call renderPlaylist(playlist)
// - Otherwise, use .filter() to get only songs that match the mood
// - Then call renderPlaylist(filtered)
// 🧪 Console log to show which mood was selected for filtering
// 🧪 Console log to show filtered results
function filterPlaylist(){
  let filter = filterMood.value;
  if (filter === "all"){
    renderPlaylist(playlist);
  } else {
    let filteredPlaylist = playlist.filter((song) => song.mood === filter);
    renderPlaylist(filteredPlaylist);
    console.log("Filter mood: ", filter);
    console.log("Filtered playlist: ", filterPlaylist);
  }
}

// 🔀 Step 8: Shuffle the playlist using Fisher-Yates algorithm
// 👉 Define a function called shufflePlaylist()
// Inside the function:
// - Loop from the end of the array to the beginning (i = length - 1; i > 0; i--)
// - Create a random index j: Math.floor(Math.random() * (i + 1))
// - Swap playlist[i] and playlist[j] using destructuring
// - After the loop, save and render the playlist again
// 🧪 Console log to confirm the playlist was shuffled

function shufflePlaylist(){
  for (let i = playlist.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    [playlist[i], playlist[j]] = [playlist[j], playlist[i]];
  }
  savePlaylist();
  renderPlaylist(playlist);
  console.log(playlist);
}

// 🌙 Step 9: Toggle between Dark Mode and Light Mode
// 👉 Define a function called toggleDarkMode()
// Inside the function:
// - Use classList.toggle("dark") on the body
// - Use contains("dark") to check if dark mode is active
// - Update toggle button text accordingly ("Light Mode" or "Dark Mode")
// - Save the theme preference in localStorage (key = "theme")
// 🧪 Console log to confirm dark mode toggle state
function toggleDarkMode(){
  let body = document.querySelector("body");
  body.classList.toggle("dark");
  if (body.classList.contains("dark")){
    toggleModeBtn.textContent = "Light Mode";
    localStorage.setItem("theme", "dark")
  } else {
    toggleModeBtn.textContent = "Dark Mode";
    localStorage.setItem("theme", "light");
  }
  console.log("Current display mode: ", localStorage.getItem("theme"));
}

// 💡 Step 10: Load the saved theme from localStorage
// 👉 Define a function called loadTheme()
// Inside the function:
// - Use getItem("theme") from localStorage
// - If it’s "dark", add the "dark" class to body and update toggle button text
// 🧪 Console log to confirm dark theme was loaded
// 🧪 Console log to confirm light/default theme
function loadTheme(){
  let theme = localStorage.getItem("theme");
  if (theme === "dark"){
    body.classList.add("dark");
    toggleModeBtn.textContent = "Light Mode";
    console.log("Dark Mode Loaded");
  }

  console.log("Current display mode (loadTheme): ", localStorage.getItem("theme"));
}

// 🎯 Step 11: Add event listeners to buttons and form
// 👉 Add the following event listeners:
// - songForm "submit" → addSong
// - filterMoodSelect "change" → filterPlaylist
// - shuffleBtn "click" → shufflePlaylist
// - toggleModeBtn "click" → toggleDarkMode
// 🧪 Console log to confirm all event listeners were attached
songForm.addEventListener("submit", addSong);
filterMood.addEventListener("change", filterPlaylist);
shuffleBtn.addEventListener("click", shufflePlaylist);
toggleModeBtn.addEventListener("click", toggleDarkMode);

console.log("All Listeners Attached");

// 🚀 Step 12: Initialize the app
// 👉 Call the following functions:
// - loadPlaylist()
// - renderPlaylist(playlist)
// - loadTheme()
// 🧪 Console log to confirm the app has been initialized
loadPlaylist();
renderPlaylist(playlist);
loadTheme();

console.log("App Initialised");

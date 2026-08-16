/*
===========================================================
PROJECT 3 — Mystery Box Reward Loader
(Promises + then/catch + async/await + try/catch)
===========================================================

🎯 WHAT YOU ARE BUILDING
A mini UI where you click "Open Mystery Box".
The app "loads" for a moment (suspense)... then:
✅ shows a reward (success)
OR
❌ shows an error (failure)
(It fails sometimes ON PURPOSE so you can practice errors.)

You also have a toggle:
- Use then/catch
- Use async/await

-----------------------------------------------------------
STEP 1 — Grab DOM elements (IDs already exist)
Use document.getElementById(...) to select:

Buttons:
- openBtn
- resetBtn

Toggle:
- thenModeRadio
- asyncModeRadio
  (OR select by name="mode")

UI:
- loadingText
- resultCard, rewardEmoji, rewardName, rewardMeta
- errorCard, errorMessage

-----------------------------------------------------------
STEP 2 — Create a function that RETURNS a Promise
Create a function like:

function loadReward() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Decide success vs failure using Math.random()
      // If success: resolve(rewardObject)
      // If fail: reject("some message")
    }, 1200);
  });
}

Reward object example:
{ emoji: "🧿", name: "Neon Charm", rarity: "Rare", points: 120 }

Make the app succeed ~70% of the time:
if (Math.random() < 0.7) success else failure

-----------------------------------------------------------
STEP 3 — UI helper functions (loading/success/error/reset)
A) showLoading()
   - show loadingText ("Loading...")
   - hide resultCard and errorCard
   - disable openBtn

B) showSuccess(reward)
   - hide loadingText
   - show resultCard
   - fill rewardEmoji/rewardName/rewardMeta
   - hide errorCard
   - enable openBtn

C) showError(message)
   - hide loadingText
   - show errorCard with message
   - hide resultCard
   - enable openBtn

D) resetUI()
   - hide loadingText
   - hide both cards
   - clear previous text
   - enable openBtn

-----------------------------------------------------------
STEP 4 — Implement then/catch flow (mode 1)
If user chose "then/catch":
1) showLoading()
2) call loadReward()
3) .then(reward => showSuccess(reward))
4) .catch(err => showError(err))

-----------------------------------------------------------
STEP 5 — Implement async/await flow (mode 2)
If user chose "async/await":
1) showLoading()
2) inside an async function:
   try {
     const reward = await loadReward();
     showSuccess(reward);
   } catch (err) {
     showError(err);
   }

-----------------------------------------------------------
STEP 6 — Reset button
resetBtn should call resetUI()

-----------------------------------------------------------
✅ TEST YOUR APP
- Click Open 10 times: you should see BOTH success and error.
- Switch mode and try again.
- Confirm button disables while loading.
*/

// ✅ WRITE YOUR CODE BELOW THIS LINE

let openBtn = document.getElementById("openBtn");
let resetBtn = document.getElementById("resetBtn");

let thenModeRadio = document.getElementById("thenModeRadio");
let asyncModeRadio = document.getElementById("asyncModeRadio");

let loadingText = document.getElementById("loadingText");
let resultCard = document.getElementById("resultCard");
let rewardEmoji = document.getElementById("rewardEmoji");
let rewardName = document.getElementById("rewardName");
let rewardMeta = document.getElementById("rewardMeta");
let errorCard = document.getElementById("errorCard");
let errorMessage = document.getElementById("errorMessage");

function loadReward(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let reward = Math.random() > 0.3 ? resolve({emoji: "🧿", name: "Neon Charm", rarity: "Rare", points: 120, meta: "This is metadata"}) : reject("No reward!");
    }, 1200);
  })
}

function showLoading(){
  loadingText.style.display = "block";
  resultCard.style.display = "none";
  errorCard.style.display = "none";

  openBtn.disabled = true;
}

function showSuccess(reward){
  loadingText.style.display = "none";
  resultCard.style.display = "block";

  rewardEmoji.textContent = reward["emoji"];
  rewardName.textContent = reward["name"];
  rewardMeta.textContent = reward["meta"];

  errorCard.style.display = "none";
  openBtn.disabled = false;
}

function showError(message){
  loadingText.style.display = "none";
  errorCard.style.display = "block";
  errorMessage.textContent = message;
  resultCard.style.display = "none";
  openBtn.disabled = false;
}

function resetUI(){
  loadingText.style.display = "none";
  errorCard.style.display = "none";
  resultCard.style.display = "none";
  openBtn.disabled = false;
}

openBtn.addEventListener("click", () => {
  if (thenModeRadio.checked) {
    console.log("then/catch");
    showLoading();
    loadReward()
    .then(reward => showSuccess(reward))
    .catch(err => showError(err));
  } else if (asyncModeRadio.checked) {
    async function waitReward() {
      console.log("async await");
      try {
        const reward = await loadReward();
        showSuccess(reward);
      } catch (error) {
        showError(error);
      }
    }
    waitReward();
  }
});

if (asyncModeRadio.checked){
  async function waitReward() {
    console.log("async await");
    try {
      const reward = await loadReward();
      showSuccess(reward);
    } catch (error) {
      showError(error);
    }
  }
  openBtn.addEventListener("click", waitReward);
}

resetBtn.addEventListener("click", () => {
  resetUI();
})
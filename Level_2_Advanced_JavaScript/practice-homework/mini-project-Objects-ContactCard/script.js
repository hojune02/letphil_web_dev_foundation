// =============================================================
// Mini Project — Contact Card
// =============================================================

/*
STEP 1 — Create these DOM references (exact names):
  - const form = document.getElementById("contactForm")
  - const contactsList = document.getElementById("contacts")
  - const status = document.getElementById("status")
  - const clearBtn = document.getElementById("clearBtn")
*/
const form = document.getElementById("contactForm");
const contactsList = document.getElementById("contacts");
const statusElem = document.getElementById("status");
const clearBtn = document.getElementById("clearBtn");

/*
STEP 2 — Write a helper function named createContactCard(dataObject)
  - Function name: createContactCard
  - Parameter: an object with keys { first, last, email, phone, fav }
  - Returns: a <div> element with class "contact" (the card)
*/
function createContactCard(dataObject) {
  // STEP 2A — Compute initials
  const initials = (dataObject.first.charAt(0) + dataObject.last.charAt(0)).toUpperCase();

  // STEP 2B — Create the outer <div> with class "contact"
  const card = document.createElement("div");
  card.classList.add("contact");

  // STEP 2C — Fill card content with structural classes
  let badgeHTML = dataObject.fav ? `<span class="badge">Favorite</span>` : "";

  card.innerHTML = `
    <div class="avatar">${initials}</div>
    <div class="contact-body">
      <div class="name">${dataObject.first} ${dataObject.last} ${badgeHTML}</div>
      <div class="meta">
        <span>✉ ${dataObject.email}</span>
        <span>📞 ${dataObject.phone}</span>
      </div>
    </div>
  `;

  // STEP 2D — return card
  return card;
}

/*
STEP 3 — Write a helper function named showToast()
  - Function name: showToast
  - Action: unhides #status, then hides it after 2000ms
*/
function showToast() {
  statusElem.hidden = false;
  setTimeout(() => {
    statusElem.hidden = true;
  }, 2000);
}

/*
STEP 4 — Write a helper function named removeEmptyState()
  - Function name: removeEmptyState
  - Action: if an element with class ".empty" exists inside #contacts, remove it
*/
function removeEmptyState() {
  const emptyEl = contactsList.querySelectorAll(".empty");
  for (let emptyItem of emptyEl) {
    emptyItem.remove();
  }
}

/*
STEP 5 — Write a helper function named restoreEmptyState()
  - Function name: restoreEmptyState
  - Action: replace the innerHTML of #contacts with the default empty-state block
*/
function restoreEmptyState() {
  contactsList.innerHTML = `<div class="empty">No contacts yet — add your first one!</div>`;
}

/*
STEP 6 — Add a "submit" listener on form that runs an inline function
  - Read inputs into exact variable names: first, last, email, phone, fav
  - Build a card with createContactCard({ first, last, email, phone, fav })
  - Call removeEmptyState(), then append the new card to contactsList
  - Call showToast(), then reset the form
*/
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const first = document.getElementById("firstName").value.trim();
  const last = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const fav = document.getElementById("fav").checked;

  const newCard = createContactCard({ first, last, email, phone, fav });

  removeEmptyState();
  contactsList.appendChild(newCard);
  showToast();
  form.reset();
});

/*
STEP 7 — Add a "click" listener on clearBtn
  - When clicked, call restoreEmptyState()
*/
clearBtn.addEventListener("click", function () {
  restoreEmptyState();
});
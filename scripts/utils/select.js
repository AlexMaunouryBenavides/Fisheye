// MENU DE TRI DES MEDIAS

// Variables
const dropDown = document.querySelector(".dropDown");
const headerDropdown = document.querySelector(".headerDropdown");
const arrow = document.querySelector(".fa-solid");
let focusablesItem = [];
focusablesItem = Array.from(dropDown.querySelectorAll("li"));

// fonction d'ouverture du menu
function openDropdown() {
  dropDown.style.display = "block";
  arrow.setAttribute("class", "fa-solid fa-chevron-up");
  headerDropdown.setAttribute("aria-expanded", "true");
}

// fonction de fermeture du menu
function closeDropdown() {
  dropDown.style.display = "none";
  arrow.setAttribute("class", "fa-solid fa-chevron-down");
  headerDropdown.setAttribute("aria-expanded", "false");
}

// OUVERTURE du menu de tri par la touche entrer
headerDropdown.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    openDropdown();
  }
});

// NAVIGATION AU CLAVIER
dropDown.addEventListener("keydown", function (e) {
  if (e.key === "Tab") {
    focusLoop(e, focusablesItem);
  }
  // FERMETURE du menu de tri
  if (e.key === "Enter") {
    closeDropdown();
  }
});

// FERMETURE du menu de tri
document.querySelector(".select").addEventListener("keydown", function (e) {
  if (e.key === "Escape" || e.key === "esc") {
    closeDropdown();
  }
});

// OUVERTURE du menu de tri
headerDropdown.addEventListener("mousedown", () => {
  openDropdown();
});

// FERMETURE du menu de tri QUAND un type de tri est sélectionné
dropDown.addEventListener("mousedown", () => {
  closeDropdown();
});

// FERMETURE du menu de tri QUAND un clic est extérieur au menu
document.addEventListener("click", (e) => {
  console.log();
  if (!document.querySelector(".dropDownContainer").contains(e.target)) {
    closeDropdown();
  }
});

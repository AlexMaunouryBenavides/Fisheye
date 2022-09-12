// RÉCUPERATION DU FICHIER photographers.json
async function getPhotographers() {
  let response = await fetch("./data/photographers.json");
  return await response.json();
}

// Fermer lightbox avec touche echap
function echapClose(f) {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.key === "esc") {
      f(e);
    }
  });
}

// Fonction incrémentation des Likes
function increment() {
  const gallery = document.querySelector("#gallery");

  gallery.addEventListener("click", function (e) {
    inc(e);
  });

  gallery.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      inc(e);
    }
  });

  function inc(e) {
    // si l'element est l'icone coeur
    if (e.target.className.includes("iconHeart")) {
      let nbLikes = e.target.previousSibling;
      // et que le nombres de likes n'a pas ete incrementé
      if (nbLikes.classList.contains("unClick")) {
        // alors on ajoute la classe click
        nbLikes.classList.replace("unClick", "click");
        nbLikes.innerHTML++;
        // ajout coeur plein
        e.target.setAttribute("class", "fa-solid fa-heart iconHeart");
      } else {
        // suppresion avec class unlick
        nbLikes.classList.replace("click", "unClick");
        nbLikes.innerHTML--;
        // suppresion du like coeur vide
        e.target.setAttribute("class", "fa-solid fa-heart iconHeart");
      }
      informationFooter();
    }
  }
}

// Bouclage de la navigation clavier ("Tab") à l'intérieur du formulaire de contact et du menu de tri
function focusLoop(e, focusables) {
  e.preventDefault();
  e.stopPropagation();
  // L'index est le premier élément qui a le focus dans tableau des éléménts "focusables"
  let index = focusables.findIndex(
    (searchFocus) => searchFocus === document.querySelector(":focus")
  );
  // Si la touche "Shift" est activée alors décrémentation de l'index du tableau
  if (e.shiftKey) {
    index--;
  } else {
    index++; // sinon on l'incrémente
  }
  // Si l'index est supérieur à la longueur du tableau, il revient au début du tableau
  if (index >= focusables.length) {
    index = 0;
  }
  // Si l'index est négatif, il va à la fin du tableau
  if (index < 0) {
    index = focusables.length - 1;
  }
  focusables[index].focus();
}

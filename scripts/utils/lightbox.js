const lightboxModal = document.getElementById("lightboxModal");
const viewContainer = document.querySelector(".viewContainer");
const legendContainer = document.querySelector(".legendContainer");

// fermer lightbox avec la croix
const crossCloseLightbox = document.querySelector(".crossCloseLightbox");
crossCloseLightbox.addEventListener("click", closeLightbox);
// fermer lightbox avec echap
echapClose(closeLightbox);

// fonction ouverture de la lightbox
function openLightboxModal() {
  lightboxModal.style.display = "block";
  document.getElementById("header").style.display = "none";
  document.getElementById("main").style.display = "none";
  document.getElementById("footer").style.display = "none";
  lightboxModal.setAttribute("aria-hidden", false);
}

// fonction fermeture lightbox
function closeLightbox() {
  lightboxModal.blur();
  lightboxModal.style.display = "none";
  document.getElementById("header").style.display = "block";
  document.getElementById("main").style.display = "block";
  document.getElementById("footer").style.display = "block";
  lightboxModal.setAttribute("aria-hidden", true);
  const movieRemove = document.querySelectorAll(".movie");
  // Pour toutes les vidéos, les éléments de contrôle sont retirés et les vidéos mises en pause
  movieRemove.forEach(() => {
    document.querySelector(".movie").removeAttribute("controls", "");
    document.querySelector(".movie").pause();
    document.querySelector(".movie").currentTime = 0;
  });
}

// Fonction création de la lightbox et sa navigation
function lightbox() {
  //creation d'un tableau des medias
  const tableauMedias = Array.from(document.getElementsByClassName("media"));
  //ecoute du click
  for (let i = 0; i < tableauMedias.length; i++) {
    tableauMedias[i].addEventListener("click", function (e) {
      let index = tableauMedias.indexOf(e.target);
      launchMedia(index);
    });
  }
  //ecoute du clavier
  for (let i = 0; i < tableauMedias.length; i++) {
    tableauMedias[i].addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        let index = tableauMedias.indexOf(e.target);
        launchMedia(index);
      }
    });
  }

  //fonction visionneuse
  async function launchMedia(index) {
    openLightboxModal(); // Quand un média est cliquer, ouverture de la lightbox
    lightboxModal.style.display = "block";
    lightboxModal.focus();

    displaySlides(index);

    lightboxModal.querySelector(".prev").addEventListener("click", function () {
      displaySlides((index -= 1));
    });
    lightboxModal.querySelector(".next").addEventListener("click", function () {
      displaySlides((index += 1));
    });

    document.addEventListener("keyup", function (e) {
      if (e.key === "ArrowLeft") {
        displaySlides((index -= 1));
      }

      if (e.key === "ArrowRight") {
        displaySlides((index += 1));
      }
    });

    document.addEventListener("keyup", function (e) {
      if (e.key === "Enter" && e.target.className.includes("prev")) {
        displaySlides((index -= 1));
      }

      if (e.key === "Enter" && e.target.className.includes("next")) {
        displaySlides((index += 1));
      }

      if (
        e.key === "Enter" &&
        e.target.className.includes("crossCloseLightbox")
      ) {
        tableauMedias[index].focus();
        closeLightbox();
      }
    });

    // Index du Carroussel
    function displaySlides(n) {
      // retour 1er image
      if (n > tableauMedias.length - 1) {
        index = 0;
      }
      // retour derniere image
      if (n < 0) {
        index = tableauMedias.length - 1;
      }
      // Si l'élément média est une vidéo alors ajouter l'attribut de contrôles de la vidéo
      if (tableauMedias[index].outerHTML.includes("video")) {
        tableauMedias[index].setAttribute("controls", "");
      }

      // Création des eléments du DOM de la lightbox
      const titreMedia = tableauMedias[index].getAttribute("alt");
      tableauMedias[index].setAttribute("tabindex", "0");
      tableauMedias[index].setAttribute("aria-label", titreMedia);
      viewContainer.innerHTML = tableauMedias[index].outerHTML;
      legendContainer.innerHTML = '<h1 class="legend"></h1>';
      const legend = document.querySelector(".legend");
      legend.innerHTML = titreMedia;
      legend.setAttribute("tabindex", "0");
    }
  }
}

//Mettre le code JavaScript lié à la page photographer.html
async function initPhotographer() {
  // Récupère l'ID dans l'URL
  let params = new URL(document.location).searchParams;
  let photographerIdUrl = params.get("id");

  // Récupère les datas et les medias des photographes
  const { photographers, media } = await getPhotographers();
  // Déclaration de constantes : tableaux qui vont acccueillir les données
  const thisPhotographer = [];
  const thisMedias = [];

  // Récupère les datas du photographe sélectionné et les mets dans un tableau
  function getThisPhotographer() {
    photographers.forEach((element) => {
      if (photographerIdUrl == element.id) {
        thisPhotographer.push(element);
      }
    });
  }
  // Récupère les médias du photographe sélectionné et les mets dans un tableau
  function getThisMedias() {
    media.forEach((element) => {
      if (photographerIdUrl == element.photographerId) {
        thisMedias.push(element);
      }
    });
  }
  // TRI DES MEDIAS
  function sort() {
    const dropDown = document.querySelector(".dropDown");
    const headerDropdown = document.querySelector(".headerDropdown");
    let valueSort = "popularity";
    typeSort(valueSort);

    // Écoute du clic de la souris et lancement de la fonction de recupération de la valeur du type de tri
    dropDown.addEventListener("mousedown", (e) => {
      recoverySortValue(e);
    });
    // Écoute du clavier (touche "Enter") et lancement de la fonction de recupération de la valeur du type de tri
    dropDown.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        recoverySortValue(e);
      }
    });

    // fonction de récupération de la valeur du type de tri
    function recoverySortValue(e) {
      if (e.target.className.includes("popularity")) {
        headerDropdown.innerHTML = "Popularité";
        valueSort = "popularity";
      }
      if (e.target.className.includes("date")) {
        headerDropdown.innerHTML = "Date";
        valueSort = "date";
      }
      if (e.target.className.includes("title")) {
        headerDropdown.innerHTML = "Titre";
        valueSort = "title";
      }
      typeSort(valueSort);
    }

    // fonction de tri avec la valeur du type de tri récupérée
    function typeSort(value) {
      if (value === "popularity") {
        thisMedias.sort((a, b) => {
          return a.likes > b.likes ? -1 : 1;
        });
      }
      if (value === "date") {
        thisMedias.sort((a, b) => {
          return a.date > b.date ? -1 : 1;
        });
      }
      if (value === "title") {
        thisMedias.sort((a, b) => {
          return a.title < b.title ? -1 : 1;
        });
      }

      // Effacement de la galerie avant son nouvel affichage prenant en compte le type tri sélectionné
      let htmlMedias = Array.from(document.querySelector("#gallery").children);
      htmlMedias.forEach((media) => {
        media.remove();
      });

      const factory = photographerMediaFactory(thisMedias); // Création de la galerie
      factory.getPhotographerGalleryDOM();
      lightbox();
    }
  }

  getThisPhotographer();
  getThisMedias();
  photographerFactory(thisPhotographer);
  photographerMediaFactory(thisMedias);
  sort();
  lightbox();
}
initPhotographer();
increment();

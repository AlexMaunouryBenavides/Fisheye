//Page Accueil
function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    //Creation du HTML dans le DOM

    //Article
    const article = document.createElement("article");
    article.setAttribute("title", "Information sur le photographe");
    article.setAttribute("tabindex", "2");

    //Images
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", "photographie de" + " " + name);

    //Titre et paragraphe
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");

    h2.textContent = name;
    h2.setAttribute("aria-label", name);
    h3.textContent = city + ", " + country;
    h4.textContent = tagline;
    p.textContent = price + "€/jour";
    //insertion dand le parent Article
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(h4);
    article.appendChild(p);

    // Lien entre Index.html et page Photographer.html
    //Au click
    img.addEventListener("click", () => {
      window.location.href = `photographer.html?id=${id}`;
    });
    h2.addEventListener("click", () => {
      window.location.href = `photographer.html?id=${id}`;
    });
    //Au clavier avec la touche entrée
    img.addEventListener("keypress", () => {
      window.location.href = `photographer.html?id=${id}`;
    });
    h2.addEventListener("keypress", () => {
      window.location.href = `photographer.html?id=${id}`;
    });
    return article;
  }

  return { getUserCardDOM };
}

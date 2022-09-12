function photographerFactory(data) {
  // Récupération photographers.json
  const { name, portrait, city, country, tagline } = data[0];

  getPhotographerPageDOM();

  function getPhotographerPageDOM() {
    const photographeHeader = document.querySelector("#photograph-header");
    const section = document.createElement("section");
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    //block texte header
    section.classList = "photographerHeaderSection";
    section.classList = "photographerHeader";
    div.classList = "infosPhotographe";
    h2.textContent = name;
    h2.setAttribute("tabindex", "2");
    h2.setAttribute("aria-label", name);
    h3.textContent = city + ", " + country;
    h4.textContent = tagline;

    photographeHeader.appendChild(section);
    section.appendChild(div);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    //bouton header
    const button = document.createElement("div");
    button.classList.add("button_button");
    button.innerHTML = `<button class="contact_button" aria-label="contacter le photographe" tabindex="4" onclick="displayModal()">Contactez-moi</button>`;

    section.appendChild(button);

    //img header

    const photoPhotographe = document.createElement("div");
    const picture = `assets/photographers/${portrait}`;
    const img = document.createElement("img");
    photoPhotographe.classList = "photo";
    img.setAttribute("alt", "photo" + " " + name);
    img.setAttribute("src", picture);

    section.appendChild(img);
  }
}

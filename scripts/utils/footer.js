async function informationFooter() {
  let params = new URL(document.location).searchParams;
  let photographerId = params.get("id");

  const { photographers } = await getPhotographers();
  photographers.forEach((element) => {
    if (photographerId == element.id) {
      informationPrice(element.price);
      informationTotalLikes();
    }
  });
  //ajout du prix
  function informationPrice(price) {
    document.querySelector(".pricePerDay").innerHTML = price + "€ / jour";
  }
  //ajout des likes
  function informationTotalLikes() {
    let totalOfLikes = 0;
    const nbLikes = document.querySelectorAll(".nbLikes"); // Récupération du nombre de likes pour chaque média
    nbLikes.forEach((e) => {
      const i = parseInt(e.innerHTML);
      totalOfLikes += i;
      document.querySelector(".totalLikes").innerHTML = totalOfLikes;
    });
  }
}

informationFooter();

/*function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}*/

//Variables du formulaire
const modal = document.getElementById("contact_modal");
const backgroundForm = document.querySelector(".background-modal");
const main = document.getElementById("main");
const firstName = document.querySelector("#first");
firstName.addEventListener("change", checkOutFirstName);
const lastName = document.querySelector("#last");
lastName.addEventListener("change", checkOutLastName);
const email = document.querySelector("#email");
email.addEventListener("change", checkOutEmail);
const message = document.querySelector("#message");
message.addEventListener("change", validMessage);

//Variables messages d'erreurs du formulaire
const firstNameError = document.querySelector("#firstname-error");
const lastNameError = document.querySelector("#lastname-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");

// VERIFICATION PRENOM

function checkOutFirstName() {
  if (!firstName.value) {
    //si champs vide erreur
    //si le champs est vide
    firstNameError.innerHTML = "Veuillez renseigner votre prénom";
    firstNameError.style.display = "block";
    return false;
  } else if (firstName.value.length < 2) {
    // si il y a moins de 2 charactères donc erreur
    firstNameError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour votre prénom";
    firstNameError.style.display = "block";
    return false;
  } else {
    //si tous est bon pas de message d'erreur
    firstNameError.style.display = "none";
    return true;
  }
}

// VERIFICATION NOM

function checkOutLastName() {
  if (!lastName.value) {
    //si champs vide erreur
    lastNameError.innerHTML = "Veuillez renseigner votre nom";
    lastNameError.style.display = "block";
    return false;
  } else if (lastName.value.length < 2) {
    //si il y a moins de 2 charactères donc erreur
    lastNameError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour votre nom";
    lastNameError.style.display = "block";
    return false;
  } else {
    //si tous est bon pas de message d'erreur
    lastNameError.style.display = "none";
    return true;
  }
}

//regex email pour accepter les charactères spéciaux chiffres et lettre avant et après le @
let regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// VERIFICATION EMAIL
function checkOutEmail() {
  if (!email.value) {
    // si le champs est vide message d'erreur
    emailError.innerHTML = "Veuillez renseigner votre adresse email";
    emailError.style.display = "block";
    return false;
  } else if (regexEmail.exec(email.value) == null) {
    //si se n'est pas conforme au regex email donc pas valide
    emailError.innerHTML =
      "Entrez une adresse valide. Exemple : contact@nom.com";
    emailError.style.display = "block";
    return false;
  } else {
    //si tout est respecté pas de message d'erreur
    emailError.style.display = "none";
    return true;
  }
}

// VERIFICATION MESSAGE

function validMessage() {
  if (!message.value) {
    //si champs vide erreur
    messageError.innerHTML = "Veuillez renseigner votre message";
    messageError.style.display = "block";
    return false;
  } else {
    //si tout est respecté pas de message d'erreur
    messageError.style.display = "none";
    return true;
  }
}

// OUVERTURE ET FERMETURE FORMULAIRE

function displayModal() {
  main.setAttribute("aria-hidden", true);
  modal.setAttribute("aria-hidden", false);
  modal.style.display = "block";
  backgroundForm.style.display = "block";
  firstName.focus();
  initializeFields();
}
function closeModal() {
  modal.style.display = "none";
  backgroundForm.style.display = "none";

  initializeFields();
}

//VALIDATION FORMULAIRE

let btnEnvoyer = document.getElementById("envoyer");
btnEnvoyer.addEventListener("click", validFormulaire);

function validFormulaire(e) {
  if (
    checkOutFirstName() &&
    checkOutLastName() &&
    checkOutEmail() &&
    validMessage()
  ) {
    const formData = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      message: message.value,
    };
    console.log(formData);
    closeModal();
    document.getElementById("formulaire").reset();
    initializeFields();

    //Remise à zéro des champs du formulaire
  } else {
    e.preventDefault();
  }
}
// Fermeture de la Modal avec Escape
window.addEventListener("keyup", (e) => {
  closeModalClavier(e);
});

function closeModalClavier(e) {
  if ((modal.style.display = "block" && e.key === "Escape")) {
    closeModal();
  }
}

function initializeFields() {
  firstName.value = null;
  lastName.value = null;
  email.value = null;
  message.value = null;
  firstNameError.style.display = "none";
  lastNameError.style.display = "none";
  emailError.style.display = "none";
  messageError.style.display = "none";
}

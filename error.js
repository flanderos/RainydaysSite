const mailErrorMsg = document.querySelector("#mail-error");
const nameErrorMsg = document.querySelector("#name-error");
const adressErrorMsg = document.querySelector("#adress-error");
const phoneErrorMsg = document.querySelector("#phone-error");
const buyButton = document.querySelector(".BUYBTN");
const emailInput = document.querySelector("#email");
const nameInput = document.querySelector("#name");
const adressInput = document.querySelector("#Adress");
const phoneInput = document.querySelector("#phone");
const form = document.querySelector("form");

let click = buyButton.addEventListener("click", displayError);

function displayError(buyButton) {
  buyButton.preventDefault();

  if (nameInput.value.trim().length > 0) {
    nameErrorMsg.style.display = "none";
  } else {
    nameErrorMsg.style.display = "block";
  }

  if (adressInput.value.trim().length > 24) {
    adressErrorMsg.style.display = "none";
  } else {
    adressErrorMsg.style.display = "block";
  }

  console.log(nameInput.value);
}

displayError();

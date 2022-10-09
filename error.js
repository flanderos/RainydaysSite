const mailErrorMsg = document.querySelector("#email-error");
const nameErrorMsg = document.querySelector("#name-error");
const adressErrorMsg = document.querySelector("#adress-error");
const phoneErrorMsg = document.querySelector("#phone-error");
const buyButton = document.querySelector(".BUYBTN");
const emailInput = document.querySelector("#email");
const nameInput = document.querySelector("#name");
const adressInput = document.querySelector("#Adress");
const phoneInput = document.querySelector("#phone");
const form = document.querySelector(".checkout-form");
const confirmedBox = document.querySelector(".thank-you");
const postalCodeErrorMsg = document.querySelector("#code-error");
const cityError = document.querySelector("#city-error");
const codeInput = document.querySelector("#postal-code");
const cityInput = document.querySelector("#city-name");

buyButton.addEventListener("click", validateForm);

function validateForm(event) {
  event.preventDefault();

  if (cityInput.value.trim().length > 0) {
    cityError.style.display = "none";
  } else {
    cityError.style.display = "block";
  }

  if (codeInput.value.length === 4) {
    postalCodeErrorMsg.style.display = "none";
  } else {
    postalCodeErrorMsg.style.display = "block";
  }

  if (nameInput.value.trim().length > 0) {
    nameErrorMsg.style.display = "none";
  } else {
    nameErrorMsg.style.display = "block";
  }

  if (adressInput.value.trim().length > 0) {
    adressErrorMsg.style.display = "none";
  } else {
    adressErrorMsg.style.display = "block";
  }

  if (validateEmail(emailInput.value) === true) {
    mailErrorMsg.style.display = "none";
  } else {
    mailErrorMsg.style.display = "block";
  }

  if (phoneInput.value.length === 8) {
    phoneErrorMsg.style.display = "none";
  } else {
    phoneErrorMsg.style.display = "block";
  }

  if (
    nameInput.value.trim().length > 0 &&
    adressInput.value.trim().length > 0 &&
    validateEmail(emailInput.value) === true &&
    phoneInput.value.length === 8 &&
    codeInput.value.length === 4 &&
    cityInput.value.trim().length > 0
  ) {
    confirmedBox.style.display = "block";
  } else {
    confirmedBox.style.display = "none";
  }
}

validateForm();

buyButton.addEventListener("click", validateForm);

function validateEmail(emailInput) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(emailInput);
  return patternMatches;
}

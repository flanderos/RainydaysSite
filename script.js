let counter = document.querySelector(".counter");
let counterState = Number(counter.innerText);
const add2cartButton = document.querySelector(".add2c");

function addTooCart() {
  counter.innerText = counterState += 1;

  if (counterState < 1) {
    counter.style.display = "none";
  } else {
    counter.style.display = "block";
  }
}

addTooCart();

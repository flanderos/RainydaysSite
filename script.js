let counter = document.querySelector(".counter");
let counterState = Number(counter.innerText);
const add2cartButton = document.querySelector(".add2c");
const sizeBox1 = document.querySelector("#small");
const sizeBox2 = document.querySelector("#medium");
const sizeBox3 = document.querySelector("#large");
const sizeBox4 = document.querySelector("#xlarge");

function addTooCart() {
  counter.innerText = counterState += 1;

  if (counterState < 1) {
    counter.style.display = "none";
  } else {
    counter.style.display = "block";
  }
}

let sizeOne = sizeBox1.addEventListener("click", pickSize);

addTooCart();

function pickSize() {
  sizeBox1.style.backgroundColor = "blue";
}

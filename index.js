const shoppingCart = document.querySelector("#cart");
const itemOne = document.querySelector("#item1");
const itemTwo = document.querySelector("#item2");
const itemThree = document.querySelector("#item3");
const itemFour = document.querySelector("#item4");
const itemFive = document.querySelector("#item5");
const itemSix = document.querySelector("#item6");
const itemSeven = document.querySelector("#item7");
const itemEight = document.querySelector("#item8");
let itemList = document.querySelector(".itemlist");
let counter = document.querySelector(".counter");
let counterState = Number(counter.innerText);
let product = document.querySelector("#product");
const price = document.querySelector(".price");

itemOne.addEventListener("click", addTooCart);
itemTwo.addEventListener("click", addTooCart);
itemThree.addEventListener("click", addTooCart);
itemFour.addEventListener("click", addTooCart);
itemFive.addEventListener("click", addTooCart);
itemSix.addEventListener("click", addTooCart);
itemSeven.addEventListener("click", addTooCart);
itemEight.addEventListener("click", addTooCart);

function addTooCart() {
  counter.innerText = counterState += 1;

  if (counterState < 1) {
    counter.style.display = "none";
  } else {
    counter.style.display = "block";
  }
}

addTooCart();

cart.addEventListener("click", showCart);

function showCart() {}

// inside the cart

function addToList() {}

shoppingCart.addEventListener("click", checkCart);

function checkCart() {}

checkCart();

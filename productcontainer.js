const jacketSpecificContainer = document.querySelector(".flex-container2");

const title = document.querySelector("title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const newUrl = "https://cm.ahutvikling.no/wp-json/wc/store/products";

async function callApiForProductpage(newUrl) {
  const response = await fetch(newUrl);
  const products = await response.json();

  products.forEach(function (product) {
    jacketSpecificContainer.innerHTML = ` <h3>${product.name}</h3>
      <img class="pinkJacket" src="${product.images[0].src}">
      <h5 class="price">${product.price},-</h5>
      <div class="buttons">
      <button class="add2c" onclick="addTooCart()">Add to cart</button>
      <a href="checkout.html"><button class="checkOutBtn">Checkout</button></a>
      <a href="index.html"><button class="shopmorebtn">Shop More</button></a>`;

    title.innerText = `${product.name}`;
  });
}

callApiForProductpage(newUrl);

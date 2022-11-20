const url = "https://cm.ahutvikling.no/wp-json/wc/store/v1/products";

const productContainer = document.querySelector(".jackets");

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();

  products.forEach(function (product) {
    productContainer.innerHTML += `<div class="product1" id="product">
    <h3>Rainydays &copy;</h3>
    <h5 id="pname">${product.name}</h5>
    <a href="jacket-specific.html?id=${product.id}">
      <img
        class="product"
        src="${product.images[0].src}"
        alt="Pink jacket"
        id="jacketlink"
      />
    </a>
    <div class="producticons">
      <i class="fa-solid fa-heart" id="love1"></i>
      <p class="productprice">${product.prices.price}</p>
      <i class="fa-solid fa-cart-shopping" id="item1"></i>
  </div>`;
  });
}

getProducts(url);

//Jacket specific

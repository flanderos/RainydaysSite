const url =
  "https://cm.ahutvikling.no/wp-json/wc/store/v1/products?consumer_key=ck_65120cf5daaff7d98c0b564605247cdf73c2f4ea&consumer_secret=cs_15fe706d0ca51206c883c8f5e1079c97857be9e0";

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

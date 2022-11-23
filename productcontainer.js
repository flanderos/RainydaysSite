const jacketSpecificContainer = document.querySelector(".flex-container2");

const title = document.querySelector("title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const newUrl =
  "https://cm.ahutvikling.no/wp-json/wc/store/v1/products" +
  "/" +
  id +
  "?" +
  "consumer_key=ck_65120cf5daaff7d98c0b564605247cdf73c2f4ea&consumer_secret=cs_15fe706d0ca51206c883c8f5e1079c97857be9e0";

async function callApiForProductpage(newUrl) {
  const response = await fetch(newUrl);
  const products = await response.json();
  console.log(products);
  console.log(products.name);
  console.log(products.prices.price);

  jacketSpecificContainer.innerHTML = `<h5>${products.name}</h5> <img class ="pinkjacket" src = "${products.images[0].src}" /><p class="price"> ${products.prices.price} ,- </p> 
  <div class="buttons">
    <a class ="add2c" href="checkout.html">Add to cart</a>
    <a class ="add2c" href="index.html">Shop More</a>
    <a class ="add2c" href="checkout.html">Checkout</a>
  </div>`;
}

callApiForProductpage(newUrl);

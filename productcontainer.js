for (let i = 0; i < products.length; i++) {
  const nameDisplay = document.querySelector("#pname");
  const priceDisplay = document.getElementsByClassName("productprice");

  let productPrice = products[i].price;
  let productName = products[i].name;

  nameDisplay.innerHTML = `<p>${productName}<p>`;
  priceDisplay.innerHTML += `<p>${productPrice}</p>`;
}

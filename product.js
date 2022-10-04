const price = document.querySelector(".productprice");

let allProducts = {
  jacket1: {
    name: "Trolltunga",
    id: 01,
    price: 1999,
  },

  jacket2: {
    name: "Galdhöpiggen allround",
    id: 02,
    price: 1999,
  },

  jacket3: {
    name: "Glittertind",
    id: 03,
    price: 2499,
  },

  jacket4: {
    name: "Spaatind",
    id: 04,
    price: 999,
  },

  jacket5: {
    name: "Gråhöe fall",
    id: 05,
    price: 4999,
  },

  jacket6: {
    name: "Snöhetta",
    id: 06,
    price: 3999,
  },

  jacket7: {
    name: "Besseggen",
    id: 07,
    price: 3499,
  },

  jacket8: {
    name: "Skjellingshövde",
    id: 08,
    price: 2999,
  },
};

price.innerHTML += `<p>${allProducts.jacket1.price} ,-</p>`;

/* for (let i = 0; i < allProducts[i].length; i++) {
  let prices = allProducts[i].price;
 */

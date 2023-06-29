const products = require("./productos.json");

function getFakeProducts() {
  return products;
}

module.exports = { getFakeProducts };

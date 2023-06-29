// const data = require("../../productos.json");
const { Product } = require("../db");
const data = require("../../productos");
console.log();
const getAllProducts = async () => {
  return data;
};

module.exports = getAllProducts;

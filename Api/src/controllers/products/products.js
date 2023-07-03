// const data = require("../../productos.json");
const { Product } = require("../../db.js");
const data = require("../../../productos");

const getAllProducts = async () => {
  return data;
};

const postProduct = async (
  item_number, model, description,
  price, discountPercentage, stock,
  isPublish
) => {
  const newProduct = await Product.create({
    item_number, model, description,
    price, discountPercentage, stock,
    isPublish
  });
  return newProduct;
};

const getProductsFromDb = async () => {
  const products = await Product.findAll();
  console.log("products", products);
  return products;
};
module.exports = { getProductsFromDb, postProduct, getAllProducts };

// const data = require("../../productos.json");
const { Product } = require("../../db.js");
const data = require("../../../productos");

const getAllProducts = async () => {
  return data;
};

const postProduct = async (
  id,
  item_number,
  name,
  category,
  brand,
  image,
  size,
  gender,
  color,
  description,
  rating
) => {
  const newProduct = await Product.create({
    id,
    item_number,
    name,
    category,
    brand,
    image,
    size,
    gender,
    color,
    description,
    rating,
  });
  return newProduct;
};

const getProductsFromDb = async () => {
  const products = await Product.findAll();
  console.log("products", products);
  return products;
};
module.exports = { getProductsFromDb, postProduct, getAllProducts };

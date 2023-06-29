const getAllProducts = require("../controllers/products.js");

const getProducts = async (req, res) => {
  const products = await getAllProducts();
  res.status(200).json(products);
};

module.exports = { getProducts };

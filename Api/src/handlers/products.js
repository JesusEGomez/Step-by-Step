const {
  getProductsFromDb,
  postProduct,
} = require("../controllers/products/products.js");

const createProduct = async (req, res) => {
  const {
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
  } = req.body;
  console.log("req.body", req.body);
  const newProduct = await postProduct(req.body);
  console.log("handler", newProduct);
  res.status(200).json(newProduct);
};

const getProducts = async (req, res) => {
  const products = await getProductsFromDb();
  res.status(200).json(products);
};

module.exports = { getProducts, createProduct };

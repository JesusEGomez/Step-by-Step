const { postProduct } = require("../controllers/products");

const getProducts = async (req, res) => {};

const createProduct = async (req, res) => {
  try {
    const product = req.body;

    console.log("producthandler", req.body);
    const result = await postProduct(product);
    console.log("result", result);
  } catch (error) {
    console.log("error", error);
  }
};
module.exports = { getProducts, createProduct };

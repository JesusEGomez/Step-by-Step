const {
  getDbProducts,
} = require("../controllers/products/getProductsController");

const getProductsFromDb = async (req, res) => {
  try {
    const allProducts = await getDbProducts();
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = getProductsFromDb;

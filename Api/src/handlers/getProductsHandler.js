const {
  getDbProducts,
} = require("../controllers/products/getProductsController");

const {
  getNikeProducts,
} = require("../controllers/products/getNikeProductsController");

const {
  getAdidasProducts,
} = require("../controllers/products/getAdidasProductsController.js");

const {
  getReebokProducts,
} = require("../controllers/products/getReebokProductsController");

const getProductsFromDb = async (req, res) => {
  try {
    const allProducts = await getDbProducts();
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getNikeProductsHandler = async (req, res) => {
  try {
    const nikeProducts = await getNikeProducts();
    res.status(200).json(nikeProducts);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAdidasProductsHandler = async (req, res) => {
  try {
    const adidasProducts = await getAdidasProducts();
    res.status(200).json(adidasProducts);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getReebokProductsHandler = async (req, res) => {
  try {
    const reebokProducts = await getReebokProducts();
    res.status(200).json(reebokProducts);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getProductsFromDb,
  getNikeProductsHandler,
  getAdidasProductsHandler,
  getReebokProductsHandler,
};

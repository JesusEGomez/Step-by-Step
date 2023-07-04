const {
  getProductsFromDb,
  postProduct,
} = require("../controllers/products/products.js");

const createProduct = async (req, res) => {
  try {
    const { item_number, model, description,
      price, discountPercentage, stock,
      isPublish
    } = req.body;

    console.log("req.body", req.body);
    const newProduct = await postProduct(req.body);
    // console.log("handler", newProduct);
    return res.status(201).json(newProduct);

  } catch (error) {
    return res.status(500).json({ message: 'no se pudo crear' })
  }
};

const getProducts = async (req, res) => {
  const products = await getProductsFromDb();
  res.status(200).json(products);
};

module.exports = { getProducts, createProduct };

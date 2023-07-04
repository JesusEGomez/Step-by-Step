const createProduct = require("../controllers/products/createProductController.js");

const postProduct = async (req, res) => {
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
  } = req.body;
  try {
    const createdProduct = await createProduct(req.body);
    return res.status(200).json(createdProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = postProduct;

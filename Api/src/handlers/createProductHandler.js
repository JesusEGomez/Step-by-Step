const createProductController = require("../controllers/products/createProductController.js");

const postProduct = async (req, res) => {
  try {
    const {
      item_number,
      name,
      description,
      price,
      discountPercentage,
      gender,
      stock,
      brand,
      size,
      categories,
      color,

      images,
    } = req.body;

    console.log("req.body", req.body);
    const createdProduct = await createProductController(req.body);
    console.log("createdProduct", createdProduct);
    return res.status(200).json(createdProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = postProduct;

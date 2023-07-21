const {
  Product,
  Brand,
  Size,
  Category,
  Color,
  Image,
  Stock,
} = require("../../db");
const { Op } = require("sequelize");

const updateProductCtrl = async (req, res) => {
  try {
    const productId = req.params.productId;

    const {
      item_number,
      model,
      description,
      gender,
      price,
      discountPercentage,
      stock,
      isPublish,
      brand,
      size,
      categories,
      color,
      images,
    } = req.body;

    // Existing logic for verifying and updating brand, sizes, categories, colors, etc. (as shown in the provided controller)

    // Actualizar el producto existente
    const updatedProduct = await Product.findByPk(productId);

    if (!updatedProduct) {
      return res.status(404).json({ message: `Producto no encontrado, con id: ${productId}` });
    }

    updatedProduct.item_number = item_number;
    updatedProduct.model = model;
    updatedProduct.description = description;
    updatedProduct.price = price;
    updatedProduct.discountPercentage = discountPercentage;
    updatedProduct.gender = gender;
    updatedProduct.isPublish = isPublish;

    await updatedProduct.save();

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar el producto", error: error.message });
  }
};

module.exports = updateProductCtrl;

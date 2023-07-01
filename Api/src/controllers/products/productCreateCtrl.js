const { Product } = require("../../db");

const createProductCtrl = async (req, res) => {
  try {
    const {
      item_number,
      model,
      description,
      price,
      discountPercentage,
      stock,
      isPublish,
    } = req.body;

    const newProduct = await Product.create({
      item_number,
      model,
      description,
      price,
      discountPercentage,
      stock,
      isPublish,
    });
    res
      .status(201)
      .json({ message: "Producto creado exitosamente", product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el producto" });
  }
};

module.exports = createProductCtrl;

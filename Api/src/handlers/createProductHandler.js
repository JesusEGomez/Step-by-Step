const createProductController = require("../controllers/products/createProductController.js");
const {
  Product,
  Color,
  Image,
  Category,
  Stock,
  Brand,
  Size,
} = require("../db.js");

const postProduct = async (req, res) => {
  try {
    const {
      item_number,
      model,
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
    const newProduct = await createProductController(req.body);
    const response = await Product.findOne({
      where: { model: model },
      include: [
        {
          model: Color,
          through: { attributes: [] },
          attributes: ["color"],
        },
        {
          model: Image,
          attributes: ["imageUrl"],
        },
        {
          model: Brand,
          attributes: ["name"],
        },
        // {
        //   model: Stock,
        //   attributes: ["stockPerSize"],
        // },
        {
          model: Size,
          attributes: ["size"],
          through: { attributes: [] },
        },
        {
          model: Category,
          through: { attributes: [] },
          attributes: ["name"],
        },
      ],
    });
    return res.status(200).json(response);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear el producto", error: error.message });
  }
};

module.exports = postProduct;

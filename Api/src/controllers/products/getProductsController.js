const { Product, Color, Size, Category } = require("../../db");

const getDbProducts = async () => {
  const result = await Product.findAll({
    include: [
      {
        model: Category,
        through: { attributes: [] },
        attributes: ["name"], // Re// Specify the attributes you want to retrieve from the associated Post model
      },
      {
        model: Color,
        through: { attributes: [] },
        attributes: ["color"], // Specify the attributes you want to retrieve from the associated Comment model
      },
      {
        model: Size,
        through: { attributes: [] },
        attributes: ["size"], // Specify the attributes you want to retrieve from the associated Comment model
      },
    ],
    // raw: true,
  });
  return result;
};

module.exports = { getDbProducts };
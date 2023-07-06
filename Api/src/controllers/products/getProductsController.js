const { Product, Color, Size, Category, Image, Brand, Stock } = require("../../db");

const getDbProducts = async () => {
  const result = await Product.findAll({
    include: [
      {
        model: Category,
        through: { attributes: [] },
        attributes: ["name"],
      },
      {
        model: Color,
        through: { attributes: [] },
        attributes: ["color"],
      },
      {
        model: Size,
        attributes: ["size"],
        through: { attributes: [] },
      },
      {
        model: Image,
        attributes: ["imageUrl"],
      },
      {
        model: Brand,
        attributes: ["name"],
      },
      {
        model: Stock
      }
    ],
  });

  const cleanedCategories = result.map((c) => c.categories.map((c) => c.name));
  console.log(cleanedCategories);
  console.log(result.map((c) => c.name));

  return [...result, result.cleanedCategories];
};

module.exports = { getDbProducts };

const { Product, Color, Size, Category, Image } = require("../../db");

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
    ],
    // raw: true,
  });

  // const categories = result.category.map((category) => category.name);
  // console.log(categories);
  return result;

  // return { ...result.toJSON(), categories };
};

module.exports = { getDbProducts };

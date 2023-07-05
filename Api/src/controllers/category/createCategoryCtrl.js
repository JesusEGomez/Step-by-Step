const { Category } = require("../../db.js");
const { Op } = require("sequelize");

const createCategory = async (category) => {
  console.log("controller", category);
  const newCategory = await Category.create({ name: category });
  return newCategory;
};
module.exports = createCategory;

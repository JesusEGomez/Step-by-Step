const { Category } = require("../../db.js");

const getCategories = async () => {
  const categories = await Category.findAll();

  return categories;
};

module.exports = getCategories;

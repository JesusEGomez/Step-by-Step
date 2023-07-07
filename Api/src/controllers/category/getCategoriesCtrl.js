const { Category } = require("../../db.js");

const getCategories = async () => {
  const categories = await Category.findAll();
  const cleanCategories = categories.map((c) => c.name);

  return cleanCategories;
};

module.exports = getCategories;

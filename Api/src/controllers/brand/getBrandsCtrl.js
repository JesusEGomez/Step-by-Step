const { Brand } = require("../../db.js");

const getBrands = async () => {
  const brands = await Brand.findAll();
  const cleanBrands = brands.map((c) => c.name);
  return cleanBrands;
};

module.exports = getBrands;

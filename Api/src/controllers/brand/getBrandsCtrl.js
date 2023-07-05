const { Brand } = require("../../db.js");

const getBrands = async () => {
  const brands = await Brand.findAll();

  return brands;
};

module.exports = getBrands;

const { Stock } = require("../../db");

const getStockByProductId = async (id) => {
  const result = await Stock.findAll({ where: { productId: id } });

  return result;
};

module.exports = getStockByProductId;

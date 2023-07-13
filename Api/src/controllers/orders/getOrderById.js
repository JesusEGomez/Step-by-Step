const { Order } = require("../../db");

const getOrderById = async (id) => {
  const result = await Order.findByPk(id);

  return result;
};

module.exports = getOrderById;

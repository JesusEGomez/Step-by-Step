const { Order } = require("../../db");

const getOrdersByUser = async (email) => {
  const result = await Order.findAll({ where: { mail: email } });

  return result;
};

module.exports = getOrdersByUser;

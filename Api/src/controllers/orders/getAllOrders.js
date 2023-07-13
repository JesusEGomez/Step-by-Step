const { Order } = require("../../db");

const getAllOrders = async () => {
  const result = await Order.findAll();

  return result;
};

module.exports = getAllOrders;

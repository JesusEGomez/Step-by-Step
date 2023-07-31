const { Order, User } = require("../../db");

const getAllOrders = async () => {
  const result = await Order.findAll({
    // include: [{ model: User }],
  });

  return result;
};

module.exports = getAllOrders;

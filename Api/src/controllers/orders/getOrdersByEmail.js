const { Order, User } = require("../../db");

const getOrdersByEmail = async (email) => {
  const founddUser = await User.findOne({ where: { mail: email } });

  const result = await Order.findAll({ where: { userId: founddUser.id } });
  return result;
};

module.exports = getOrdersByEmail;

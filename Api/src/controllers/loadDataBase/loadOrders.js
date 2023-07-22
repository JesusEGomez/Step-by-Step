const orders = require("../../../assets/database/orders.json");
const { Order, User } = require("../../db.js");

const createOrders = async () => {
  try {
    // for (let i = 0; i < 10; i++) {
    for (let i = 0; i < orders.length; i++) {
      const order = orders[i];

      const orderData = {
        orderNumber: order.orderNumber,
        paymentStatus: order.paymentStatus,
        productId: order.productId,
        size: order.size,
        quantity: order.quantity,
        email: order.email,
      };
      const createOrder = await Order.create(orderData);

      const foundUser = await User.findOne({
        where: { mail: order.email },
      });

      if (foundUser) {
        await createOrder.setUser(foundUser.id);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = createOrders;

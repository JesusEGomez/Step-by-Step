const { Order, Product, User } = require("../../db.js");

// crear una orden con product id y userid.
//  const orderData =
// [
//   {
//    "orderNumber": "MLOOHJEK33434",
//     "fullFillmentStatus": "pending",
//     "paymentStatus": "pending",
//     "productId": 14,
//     "userId": 1

//   },
//   {
//    "orderNumber": "MLOOHJEK33435",
//     "fullFillmentStatus": "pending",
//     "paymentStatus": "pending",
//     "productId": 44,
//     "userId": 1

//   },
//   {
//     "orderNumber": "MLOOHJEK33436",
//     "fullFillmentStatus": "approved",
//     "paymentStatus": "pending",
//     "productId": 4,
//     "userId": 1
//   }
// ]

const createOrder = async (orderData) => {
  try {
    for (const order of orderData) {
      const {
        productId,
        email,
        orderNumber,
        paymentStatus,
        fullFillmentStatus,
      } = order;
      console.log("orderNumber", productId);

      const product = await Product.findByPk(productId);
      const user = await User.findOne({ where: { mail: email } });
      // console.log("orderNumber", orderData);
      const data = {
        orderNumber: orderNumber,
        paymentStatus: paymentStatus,
        fullFillmentStatus: fullFillmentStatus,
        email: email,
      };

      const createdOrder = await Order.create(data);
      await createdOrder.setProduct(product);
      await createdOrder.setUser(user);
    }

    // const response = await Order.findAll({
    //   where: { orderNumber: orderNumber },
    // });
    // return response;
  } catch (error) {
    console.error("Error creating orders:", error);
  }
};

module.exports = createOrder;

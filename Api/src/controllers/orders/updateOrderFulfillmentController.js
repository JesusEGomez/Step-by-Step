const { Order } = require("../../db");

const updateOrderFullFillment = async (orderNumber, status) => {
  console.log("id", orderNumber, status);
  try {
    const order = await Order.findOne({ where: { orderNumber: orderNumber } });
    console.log("Order", order);

    if (order) {
      order.fullFillmentStatus = status;

      // Save the changes to the database
      await order.save();

      console.log("Order fulfilled successfully!", order);
      return order; // Return the updated order if needed
    } else {
      console.log("Order not found.");
    }
  } catch (error) {
    console.error("Error fulfilling order:", error);
  }
};

module.exports = updateOrderFullFillment;

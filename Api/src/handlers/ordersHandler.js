const createOrder = require("../controllers/orders/createOrder");
const getAllOrders = require("../controllers/orders/getAllOrders");
const getOrdersByEmail = require("../controllers/orders/getOrdersByEmail");
const updateOrderFullFillment = require("../controllers/orders/updateOrderFulfillmentController");
const updateStockPerSize = require("../controllers/stock/updateStockController");

const createOrderHandler = async (req, res) => {
  try {
    const order = req.body;
    console.log("orderhandler", order);
    const newOrder = await createOrder(order);
    const updateStock = await updateStockPerSize(order);

    res.status(200).json(newOrder);
    return updateStock;
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error creating orders", message: error.message });
  }
};

const getOrdersHandler = async (req, res) => {
  try {
    const orders = await getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error getting orders", message: error.message });
  }
};

const getOrdersByEmailHandler = async (req, res) => {
  const { email } = req.params;
  try {
    const orders = await getOrdersByEmail(email);
    res.status(200).json(orders);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error getting orders", message: error.message });
  }
};
const updateOrderFullFillmentHandler = async (req, res) => {
  const { orderNumber, fullFillmentStatus } = req.body;
  try {
    const order = await updateOrderFullFillment(
      orderNumber,
      fullFillmentStatus
    );
    res.status(200).json(order);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error getting orders", message: error.message });
  }
};

module.exports = {
  getOrdersHandler,
  createOrderHandler,
  getOrdersByEmailHandler,
  updateOrderFullFillmentHandler,
};

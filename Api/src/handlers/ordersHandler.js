const createOrder = require("../controllers/orders/createOrder");
const getAllOrders = require("../controllers/orders/getAllOrders");
const getOrderById = require("../controllers/orders/getOrderById");
const updateStockPerSize = require("../controllers/stock/updateStockController");

const createOrderHandler = async (req, res) => {
  try {
    const { order } = req.body;
    // console.log(order);
    const newOrder = await createOrder(req.body);
    const updateStock = await updateStockPerSize(req.body);

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

const getOrderByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const orders = await getOrderById(id);
    res.status(200).json(orders);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error getting orders", message: error.message });
  }
};

module.exports = {
  getOrdersHandler,
  createOrderHandler,
  getOrderByIdHandler,
};

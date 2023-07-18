const getStockByProductId = require("../controllers/stock/getStockByProductIdController.js");
const updateStockPerSize = require("../controllers/stock/updateStockController.js");
const getStock = require("../controllers/stock/getStockController.js");

const getStockHandler = async (req, res) => {
  try {
    const stock = await getStock();
    res.status(200).json(stock);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error getting stock", message: error.message });
  }
};

const getStockByIdHandler = async (req, res) => {
  const { productId } = req.body;
  try {
    const stock = await getStockByProductId(productId);
    res.status(200).json(stock);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error getting stock", message: error.message });
  }
};

// updata
const updateStockPerSizeHandler = async (req, res) => {
  const order = req.body;

  try {
    const newStock = await updateStockPerSize(order);
    res.status(200).json(order);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error setting stock", message: error.message });
  }
};

module.exports = {
  getStockHandler,
  updateStockPerSizeHandler,
  getStockByIdHandler,
};

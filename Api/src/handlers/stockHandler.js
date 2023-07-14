const getStockByProductId = require("../controllers/stock/getStockByProductIdController.js");

const getStockHandler = async (req, res) => {
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

//updata
// const getOrdersHandler = async (req, res) => {
//     try {
//       const orders = await getAllOrders();
//       res.status(200).json(orders);
//     } catch (error) {
//       res
//         .status(500)
//         .json({ error: "Error getting orders", message: error.message });
//     }
//   };

module.exports = getStockHandler;

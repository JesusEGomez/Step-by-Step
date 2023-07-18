const { Stock } = require("../../db");

const updateStockPerSize = async (order) => {
  try {
    for (const e of order) {
      const quantityToDecrement = e.quantity;
      console.log(e.size, e.productId, e.quantity);

      const stock = await Stock.findOne({
        where: {
          productId: e.productId,
          sizeId: e.size - 34,
        },
      });

      if (stock) {
        await stock.decrement("stockPerSize", { by: quantityToDecrement });
        console.log("Stock quantity decremented successfully!");
      } else {
        console.log(
          "Stock record not found for the provided productId and sizeId."
        );
      }
    }
  } catch (error) {
    console.error("Error decrementing stock quantity:", error);
  }
};

module.exports = updateStockPerSize;

// const updateStockPerSize = async (order) => {
//   try {
//     for (const e of order) {
//       let currentStock = await Stock.findByPk(e.productId);
//       console.log(currentStock.stockPerSize);

//       const newStock = currentStock.stockPerSize - e.quantity;
//       console.log(newStock);

//       await Stock.update(
//         { stockPerSize: newStock },
//         {
//           where: {
//             productId: e.productId,
//             sizeId: e.size - 33,
//           },
//           returning: true,
//         }
//       );

//       currentStock.stockPerSize = newStock; // Update currentStock with the new value
//       console.log(currentStock.stockPerSize);
//       console.log(e.quantity);
//       console.log("tomas");
//     }
//   } catch (error) {
//     console.error("Error updating stock quantity:", error);
//   }
// };

// module.exports = updateStockPerSize;

const { Stock } = require("../../db");

const updateStockPerSize = async (order) => {
  try {
    order.forEach(async (e) => {
      console.log(e.quantity);
      console.log("tomas");
      const currentStock = await Stock.findByPk(e.productId);
      console.log(currentStock.stockPerSize);

      const newStock = currentStock.stockPerSize - e.quantity;
      console.log(newStock);

      const stockUpdate = await Stock.update(
        { stockPerSize: newStock },
        {
          where: {
            productId: e.productId,
            sizeId: e.size - 33,
          },
        }
      );

      console.log(
        `Updated productId ${currentStock.productId}, last stock = ${currentStock.stockPerSize}, updated stock ${currentStock.productId} rows.`
      );
    });
  } catch (error) {
    console.error("Error updating stock quantity:", error);
  }
};

module.exports = updateStockPerSize;

//   In the above code, the updateStockQuantity function takes in the productId, sizeId, and newQuantity as parameters. It uses the Stock model's update method to update the quantity field of the relevant stock records.

//   The where object in the update method is used to specify the conditions for updating the stock. In this case, we are filtering based on both the productId and sizeId.

//   The affectedRows variable will contain the number of rows that were updated. You can use it for logging or further processing if needed.

//   Ensure that you adjust the code according to your specific Sequelize model names and the fields you are using for filtering and updating the stock quantity.

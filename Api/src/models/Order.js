const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "order",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,

        primaryKey: true,
      },
      orderNumber: {
        type: DataTypes.STRING,
      },
      paymentStatus: {
        type: DataTypes.ENUM("pending", "cancelled", "rejected", "approved"),
        defaultValue: "pending",
        // allowNull: false,
      },
      fullFillmentStatus: {
        type: DataTypes.ENUM("pending", "completed"),
        defaultValue: "pending",
        // allowNull: false,
      },
      // totalAmount: {
      //   type: DataTypes.DECIMAL(10, 2),
      //   // allowNull: false,
      //   validate: {
      //     isDecimal: true,
      //     min: 0,
      //   },
      // },
    },
    {
      timestamps: false,
    }
  );
};

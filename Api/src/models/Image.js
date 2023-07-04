const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "image",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      // productId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: true,
      // },
      imageUrl: {
        type: DataTypes.TEXT,
        allowNull: true,
        // validate: {
        //     isAcceptedFormat(value) {
        //         if (!/\.(png|jpg)$/.test(value)) {
        //             throw new Error("La URL de la imagen debe terminar en .png o .jpg");
        //         }
        //     },
        // }
      },
    },
    {
      timestamps: false,
    }
  );
};

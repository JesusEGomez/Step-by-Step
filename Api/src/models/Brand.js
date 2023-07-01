const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("brand", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    urlImage: {
      type: DataTypes.STRING,
      defaultValue: `https://i.imgur.com/xBS75Qb.png`,
      // validate: {
      //     isAcceptedFormat(value) {
      //         if (!/\.(png|jpg)$/i.test(value)) {
      //             throw new Error("La URL de la imagen debe terminar en .png o .jpg");
      //         }
      //     },
      // }
    },
  });
};

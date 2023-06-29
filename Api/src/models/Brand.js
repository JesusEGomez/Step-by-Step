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
    },
  });
};

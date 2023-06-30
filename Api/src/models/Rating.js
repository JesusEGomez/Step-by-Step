const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("rating", {
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
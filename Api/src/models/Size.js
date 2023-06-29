const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("size", {
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

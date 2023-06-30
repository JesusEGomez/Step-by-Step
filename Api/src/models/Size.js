const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("size", {
    id: {
      type: DataTypes.UUID,
      autoIncrement: DataTypes.UUIDV4,
      primaryKey: true,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: {
          args: true,
          msg: 'El valor de size debe contener solo numeros',
        }
      }
    },
  });
};
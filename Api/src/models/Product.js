const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("products", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    item_number: {
      type: DataTypes.STRING,
      defaultValue: "sin item number",
      allowNull: true,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2],
          msg: "El modelo debe tener al menos 2 caracteres",
        },
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: {
          args: [10],
          msg: "El eslogan debe tener al menos 10 caracteres",
        },
      },
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0.0,
      validate: {
        min: {
          args: 0.0,
          msg: "El precio no puede ser menor que 0",
        },
      },
    },
    discountPercentage: {
      type: DataTypes.FLOAT,
      defaultValue: 0.0,
      allowNull: true,
      min: {
        args: 0.0,
        msg: "El porcentaje de descuento no puede ser menor que 0",
      },
      max: {
        args: 100.0,
        msg: "El porcentaje de descuento no puede ser mayor a 100",
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
      validate: {
        min: {
          args: 0,
          msg: "El stock no puede ser menor que 0",
        },
      },
    },
    isPublish: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  });
};

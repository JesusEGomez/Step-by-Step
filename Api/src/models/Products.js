const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Product", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    item_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount_percentage: {
      type: DataTypes.INTEGER,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    brand: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    category: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),

      primaryKey: true,
    },
    size: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    color: {
      type: DataTypes.ARRAY(DataTypes.STRING),

      primaryKey: true,
    },
    gender: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },

    sold_count: {
      type: DataTypes.INTEGER,
    },
  });
};

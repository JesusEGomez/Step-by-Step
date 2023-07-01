const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("size", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        if (typeof value === "number") {
          this.setDataValue("size", value.toString());
        } else {
          this.setDataValue("size", value);
        }
      },
      validate: {
        isNumeric: {
          args: true,
          msg: 'El valor de size debe contener solo numeros',
        }
      },

    },
  });
};
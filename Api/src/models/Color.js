const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "color",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      color: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
      },
      // hex: {
      //   type: DataTypes.STRING,
      //   unique: false,
      //   allowNull: true,
      //   defaultValue: '#ffffff',
      // validate: {
      //   isValidHex(value) {
      //     // Puede tener #, debe tener un un codigo hex de 6 digitos...
      //     const hexRegex = /^#?([0-9A-Fa-f]{6})$/;
      //     if (!hexRegex.test(value)) {
      //       throw new Error("El valor de hex debe ser un código hexadecimal válido de 6 dígitos.");
      //     }
      //   },
      // },
      //   set(value) {
      //     if (value && !value.startsWith("#")) {
      //       this.setDataValue("hex", `#${value}`);
      //     } else {
      //       this.setDataValue("hex", value);
      //     }
      //   }
      // }
    },
    { timestamps: false }
  );
};

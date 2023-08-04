const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "not",
      validate: {
        len: [2, 50],
      },
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "not",
      validate: {
        len: [2, 50],
      },
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true,
      validate: {
        notEmpty: {
          msg: "El campo usuario no puede estar vacío",
        },
      },
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: true,
      // unique: true,
      validate: {
        isEmail: true,
        // validateEmailOrCellphone: function () {
        //   if (!this.mail && !this.phone) {
        //     throw new Error("Debe proporcionar al menos un email o un celular");
        //   }
        // },
      },
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    // phone: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    //   unique: true,
    //   validate: {
    //     is: /^[0-9+]+$/,
    //     validateEmailOrCellphone: function () {
    //       if (!this.mail && !this.phone) {
    //         throw new Error("Debe proporcionar al menos un email o un celular");
    //       }
    //     },
    //     len: {
    //       args: [8, 12],
    //       msg: "La longitud del número de celular debe estar entre 8 y 12 caracteres",
    //     },
    //   },
    // },

    // password: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     is: {
    //       args: /^(?=.*[A-Z])(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_])/,
    //       msg: "La contraseña debe contener al menos una letra mayúscula, un número, letras en general y un carácter especial",
    //     },
    //     len: {
    //       args: [6],
    //       msg: "La contraseña debe tener al menos 6 caracteres",
    //     },
    //   },
    // },
    // Aqui se puede agregar mas.
  });
};

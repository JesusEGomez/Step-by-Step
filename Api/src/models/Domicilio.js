const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("address", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 50], // Longitud mínima de 2 caracteres y máxima de 50 caracteres
            },
        },
        province: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 50], // Longitud mínima de 2 caracteres y máxima de 50 caracteres
            },
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 50], // Longitud mínima de 2 caracteres y máxima de 50 caracteres
            },
        },
        neighborhood: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 50], // Longitud mínima de 2 caracteres y máxima de 50 caracteres
            },
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 50], // Longitud mínima de 2 caracteres y máxima de 50 caracteres
            },
        },
        n_street: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
            }

        },
        floor: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    })
}
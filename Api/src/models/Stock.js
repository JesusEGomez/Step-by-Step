const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("stock", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        stockPerSize: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            validate: {
                min: 0
            }
        },       
    })
}
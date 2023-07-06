const { Color } = require("../../db.js");
const { Op } = require("sequelize");

const createColor = async (color) => {
  console.log("controller", color);
  const newColor = await Color.create({ color: color });
  return newColor;
};
module.exports = createColor;

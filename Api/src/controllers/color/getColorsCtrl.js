const { Color } = require("../../db.js");

const getColors = async () => {
  const colors = await Color.findAll();

  return colors;
};

module.exports = getColors;

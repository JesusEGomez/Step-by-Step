const { Color } = require("../../db.js");

const getColors = async () => {
  const colors = await Color.findAll();

  const cleanColors = colors.map((c) => c.color);

  return cleanColors;
};

module.exports = getColors;

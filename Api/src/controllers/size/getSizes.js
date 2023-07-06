const { Size } = require("../../db.js");

const getSizes = async () => {
  const sizes = await Size.findAll();

  return sizes;
};

module.exports = getSizes;

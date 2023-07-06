const getSizes = require("../controllers/size/getSizes");

const getSizesHandler = async (req, res) => {
  try {
    const allSizes = await getSizes();
    return res.status(200).json(allSizes);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = getSizesHandler;

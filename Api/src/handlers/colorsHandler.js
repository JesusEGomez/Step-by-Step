const getColors = require("../controllers/color/getColorsCtrl");

const createColor = require("../controllers/color/createColorCtrl");

const createColorHandler = async (req, res) => {
  const { color } = req.body;
  try {
    // console.log("handler", color);
    const newColor = await createColor(color);

    return res.status(201).json({
      message: `Color creado exitosamente: `,
      Newcolor: newColor,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: `Color no pudo ser creado` });
  }
};

const getColorsHandler = async (req, res) => {
  try {
    const allColors = await getColors();
    return res.status(200).json(allColors);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { createColorHandler, getColorsHandler };

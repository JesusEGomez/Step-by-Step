const createBrand = require("../controllers/brand/createBrandCtrl");
const getBrands = require("../controllers/brand/getBrandsCtrl");

const createBrandHandler = async (req, res) => {
  const { name } = req.body;
  try {
    console.log("handler", name);
    const newBrand = await createBrand(name);

    return res
      .status(201)
      .json({ message: `Brand creado exitosamente: `, NewBrand: newBrand });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: `Brand no pudo ser creado` });
  }
};

const getBrandsHandler = async (req, res) => {
  try {
    const allBrands = await getBrands();
    return res.status(200).json(allBrands);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { createBrandHandler, getBrandsHandler };

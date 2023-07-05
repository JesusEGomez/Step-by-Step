const createBrandCtrl = require("../controllers/brand/createBrandCtrl");
const getBrandsCtrl = require("../controllers/brand/createBrandCtrl");

const createBrand = async (req, res) => {
  try {
    const { brand } = req.body;
    console.log(brand);
    const newBrand = createBrandCtrl(brand);

    return res
      .status(201)
      .json({ message: `Brand creado exitosamente: `, Brand: newBrand });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: `Brand no pudo ser creado` });
  }
};

const getBrands = async (req, res) => {
  try {
    const brands = await getBrandsCtrl();
    return res.status(200).json(brands);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { createBrand, getBrands };

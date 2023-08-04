const getCategories = require("../controllers/category/getCategoriesCtrl");

const createCategory = require("../controllers/category/createCategoryCtrl");

const createCategoryHandler = async (req, res) => {
  const { name } = req.body;
  try {
    // console.log("handler", name);
    const newCategory = await createCategory(name);

    return res.status(201).json({
      message: `Category creado exitosamente: `,
      NewCategory: newCategory,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: `Category no pudo ser creado` });
  }
};

const getCategoriesHandler = async (req, res) => {
  try {
    const allCategories = await getCategories();
    return res.status(200).json(allCategories);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { createCategoryHandler, getCategoriesHandler };

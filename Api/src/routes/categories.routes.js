const { Router } = require("express");

const {
  getCategoriesHandler,
  updateCategory,
  createCategoryHandler,
} = require("../handlers/categoriesHandler");

const categoriesRoutes = Router();

categoriesRoutes.post("/create", createCategoryHandler);
categoriesRoutes.get("/", getCategoriesHandler);

// categoiesRoutes.put("/:id", updateCategory);

module.exports = categoriesRoutes;

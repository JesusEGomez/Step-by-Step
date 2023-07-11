const { Router } = require("express");

const {
  getBrandsHandler,
  updateBrands,
  createBrandHandler,
} = require("../handlers/brandsHandler");

const brandsRoutes = Router();

brandsRoutes.post("/create", createBrandHandler);
brandsRoutes.get("/", getBrandsHandler);

// brandsRoutes.put("/:id", updateBrands);

module.exports = brandsRoutes;

const { Router } = require("express");

const {
  getBrands,
  updateBrands,
  createBrand,
} = require("../handlers/brandsHandler");

const brandsRoutes = Router();

brandsRoutes.post("/create", createBrand);
brandsRoutes.get("/", getBrands);

// brandsRoutes.put("/:id", updateBrands);

module.exports = brandsRoutes;

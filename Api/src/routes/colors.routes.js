const { Router } = require("express");

const {
  getColorsHandler,
  updatecolors,
  createColorHandler,
} = require("../handlers/colorsHandler");

const colorsRoutes = Router();

colorsRoutes.post("/create", createColorHandler);
colorsRoutes.get("/", getColorsHandler);

// colorsRoutes.put("/:id", updatecolors);

module.exports = colorsRoutes;

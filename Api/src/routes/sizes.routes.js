const { Router } = require("express");

const getSizesHandler = require("../handlers/sizesHandler");

const sizesRoutes = Router();

sizesRoutes.get("/", getSizesHandler);

module.exports = sizesRoutes;

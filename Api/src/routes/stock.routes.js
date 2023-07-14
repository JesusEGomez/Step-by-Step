const { Router } = require("express");

const { updateStockPerSizeHandler } = require("../handlers/stockHandler");

const stockRouter = Router();

stockRouter.put("/update", updateStockPerSizeHandler);

module.exports = stockRouter;

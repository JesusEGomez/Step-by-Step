const { Router } = require("express");

const {
  updateStockPerSizeHandler,
  getStockHandler,
} = require("../handlers/stockHandler");

const stockRouter = Router();

stockRouter.put("/update", updateStockPerSizeHandler);
stockRouter.get("/", getStockHandler);

module.exports = stockRouter;

const { Router } = require("express");
// const { getProducts, createProduct } = require("../handlers/products");
const createProductCtrl = require("../controllers/products/productCreateCtrl");

const productsRouter = Router();

productsRouter.get("/", getProducts);
// productsRouter.get("/:idProduct", getById);
productsRouter.post("/", createProductCtrl);

module.exports = productsRouter;

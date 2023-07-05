const { Router } = require("express");
 const { getProducts, createProduct } = require("../handlers/products");

const productsRouter = Router();

productsRouter.get("/", getProductsFromDb);

productsRouter.post("/create", postProduct);
 productsRouter.get("/:idProduct", getById);
productsRouter.post("/create2", createProductCtrl);
//
module.exports = productsRouter;

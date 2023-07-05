const { Router } = require("express");
const postProduct = require("../handlers/createProductHandler");
const getProductsFromDb = require("../handlers/getProductsHandler");

const createProductCtrl = require("../controllers//products/productCreateCtrl");

const productsRouter = Router();

productsRouter.get("/", getProductsFromDb);

productsRouter.post("/create", postProduct);
// productsRouter.get("/:idProduct", getById);
productsRouter.post("/create2", createProductCtrl);
//
module.exports = productsRouter;
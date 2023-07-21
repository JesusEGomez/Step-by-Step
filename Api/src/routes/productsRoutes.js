const { Router } = require("express");

const createProductCtrl = require("../controllers/products/productCreateCtrl");
const postProduct = require("../handlers/createProductHandler");
const getProductsFromDb = require("../handlers/getProductsHandler");

const productsByNameCtrl = require("../controllers/products/productsByNameCtrl.js");
const productsByIdCtrl = require("../controllers/products/productByIdCtrl.js");
const updateProductCtrl = require("../controllers/products/productUpdateCtrl.js")
const productsRouter = Router();

productsRouter.get("/", getProductsFromDb);
productsRouter.post("/create", postProduct);

productsRouter.post("/", createProductCtrl);
productsRouter.get("/name", productsByNameCtrl);
productsRouter.get("/:id", productsByIdCtrl);

productsRouter.put("/:productId", updateProductCtrl)

module.exports = productsRouter;

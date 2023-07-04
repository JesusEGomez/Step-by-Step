const { Router } = require("express");
// const { getProducts, createProduct } = require("../handlers/products");
const createProductCtrl = require('../controllers/products/productCreateCtrl')
const postProduct = require("../handlers/createProductHandler");
const getProductsFromDb = require("../handlers/getProductsHandler");
// const createProduct = require("../controllers/products/createProductController.js");

const productsRouter = Router();

// productsRouter.get("/", getProducts);
productsRouter.get("/", getProductsFromDb);
productsRouter.post("/create", postProduct);
// productsRouter.get("/:idProduct", getById);
// productsRouter.post("/", createProduct);

productsRouter.post("/", createProductCtrl);
//
module.exports = productsRouter;

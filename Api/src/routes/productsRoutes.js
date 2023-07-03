const { Router } = require("express");
const {
  getProducts,
  postProduct,
  postImagesToUrl,
  hardcodeProducts,
} = require("../handlers/products");
const createProductCtrl = require("../controllers//products/productCreateCtrl");
const { getAllProducts } = require("../controllers/products/products");

const productsRouter = Router();
// console.log("routes", images);
productsRouter.get("/", getProducts);
// productsRouter.get("/:idProduct", getById);
productsRouter.post("/create2", postProduct);
productsRouter.post("/create", createProductCtrl);
productsRouter.post("/images", postImagesToUrl);
productsRouter.post("/all", hardcodeProducts);

//
module.exports = productsRouter;

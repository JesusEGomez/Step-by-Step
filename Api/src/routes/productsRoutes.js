const { Router } = require("express");
const productsByNameCtrl = require("../controllers/products/productsByNameCtrl.js");
const productsByIdCtrl = require("../controllers/products/productByIdCtrl.js");

const createProductCtrl = require("../controllers/products/productCreateCtrl");
// const postProduct = require("../handlers/createProductHandler");
const {
  getProductsFromDb,
  getNikeProductsHandler,
  getAdidasProductsHandler,
  getReebokProductsHandler,
  updateProductHandler,
} = require("../handlers/getProductsHandler");

const productsRouter = Router();
productsRouter.put("/update", updateProductHandler);
productsRouter.get("/reebok", getReebokProductsHandler);
productsRouter.get("/nike", getNikeProductsHandler);
productsRouter.get("/adidas", getAdidasProductsHandler);
productsRouter.get("/name", productsByNameCtrl);

productsRouter.get("/", getProductsFromDb);
// productsRouter.post("/create", postProduct);

productsRouter.post("/", createProductCtrl);
productsRouter.get("/:id", productsByIdCtrl);

module.exports = productsRouter;

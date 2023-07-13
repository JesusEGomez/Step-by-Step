const { Router } = require("express");
const router = Router();

// Ejemplo: router.use('/auth', authRouter);
// router.use("/products", productsRouter);
const brandsRoutes = require("./brands.routes.js");
const usersRouter = require("./users.routes");
const addressRoutes = require("./address.routes");
const productsRouter = require("./productsRoutes.js");
const categoriesRouter = require("./categories.routes.js");
const colorsRouter = require("./colors.routes.js");
const sizesRouter = require("./sizes.routes.js");
const ordersRouter = require("./orders.routes.js");
const mercadoPagoRouter = require("./mercadoPago.routes.js");

router.use("/users", usersRouter);
router.use("/address", addressRoutes);
router.use("/products", productsRouter);
router.use("/brands", brandsRoutes);
router.use("/categories", categoriesRouter);
router.use("/sizes", sizesRouter);
router.use("/colors", colorsRouter);
router.use("/orders", ordersRouter);

router.use("/checkout", mercadoPagoRouter);
module.exports = router;

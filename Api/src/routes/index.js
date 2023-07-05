const { Router } = require("express");
const router = Router()

// Ejemplo: router.use('/auth', authRouter);
// router.use("/products", productsRouter);
const brandsRoutes = require("./brands.routes.js");
const usersRouter = require("./users.routes");
const addressRoutes = require("./address.routes");
const productsRouter = require('./productsRoutes.js')

router.use('/users', usersRouter);
router.use('/address', addressRoutes);
router.use('/products', productsRouter);
router.use("/brands", brandsRoutes);

module.exports = router;

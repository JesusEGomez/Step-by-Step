const { Router } = require("express");

const router = Router();

const productsRouter = require("./productsRoutes");
const brandsRoutes = require("./brands.routes.js");
const usersRouter = require("./users.routes");
const addressRoutes = require("./address.routes");

router.use("/products", productsRouter);

// router.get('/users', userAllCtrl)

router.use("/users", usersRouter);
router.use("/address", addressRoutes);
router.use("/brands", brandsRoutes);

module.exports = router;

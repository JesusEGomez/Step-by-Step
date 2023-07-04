const { Router } = require("express");

const router = Router();
// const productsRouter = require("./productsRoutes");
const createProductCtrl = require("../controllers/products/productCreateCtrl");
const usersRouter = require("../routes/users.routes.js");
const addressRoutes = require("../routes/address.routes.js");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/products", productsRouter);

const usersRouter = require("./users.routes");
const addressRoutes = require("./address.routes");

router.use("/products", productsRouter);

// router.get('/users', userAllCtrl)
// router.post('/producto', createProductCtrl);
router.use("/users", usersRouter);
router.use("/address", addressRoutes);

router.use("/users", usersRouter);
router.use("/address", addressRoutes);

module.exports = router;

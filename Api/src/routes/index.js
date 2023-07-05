const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router()

const productsRouter = require("./productsRoutes");
const usersRouter = require('../routes/users.routes.js')
const addressRoutes = require('../routes/address.routes.js')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use("/products", productsRouter);
const brandsRoutes = require("./brands.routes.js");
const usersRouter = require("./users.routes");
const addressRoutes = require("./address.routes");

router.use('/users', usersRouter);
router.use('/address', addressRoutes);
router.use('/products', productsRouter);
router.use("/brands", brandsRoutes);

module.exports = router;

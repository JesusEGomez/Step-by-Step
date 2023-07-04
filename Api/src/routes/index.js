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

router.use('/users', usersRouter);
router.use('/address', addressRoutes);
router.use('/products', productsRouter);

module.exports = router;

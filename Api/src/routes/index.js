const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const productsRouter = require("./productsRoutes");
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/products", productsRouter);

module.exports = router;

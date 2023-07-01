const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
// const productsRouter = require("./productsRoutes");
const userAllCtrl = require('../controllers/users/usersAllCtrl');
const createProductCtrl = require('../controllers/products/productCreateCtrl');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use("/products", productsRouter);

router.get('/users', userAllCtrl)
router.post('/producto', createProductCtrl);


module.exports = router;

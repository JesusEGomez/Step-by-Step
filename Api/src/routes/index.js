const { Router } = require("express");

const router = Router();

const productsRouter = require("./productsRoutes");

const usersRouter = require("./users.routes");
const addressRoutes = require("./address.routes");

router.use("/products", productsRouter);

// router.get('/users', userAllCtrl)
router.post('/producto', createProductCtrl);
router.use('/users', usersRouter);
router.use('/address', addressRoutes);

module.exports = router;

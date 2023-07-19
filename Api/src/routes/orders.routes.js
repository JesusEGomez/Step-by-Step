const { Router } = require("express");

const {
  createOrderHandler,
  getOrdersByEmailHandler,
  getOrdersHandler,
} = require("../handlers/ordersHandler");

const ordersRouter = Router();

ordersRouter.post("/create", createOrderHandler);
ordersRouter.get("/", getOrdersHandler);
ordersRouter.get("/email", getOrdersByEmailHandler);

module.exports = ordersRouter;

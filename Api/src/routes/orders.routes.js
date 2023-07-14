const { Router } = require("express");

const {
  createOrderHandler,
  getOrderByIdHandler,
  getOrdersHandler,
  getOrdersByUserHandler,
} = require("../handlers/ordersHandler");

const ordersRouter = Router();

ordersRouter.post("/create", createOrderHandler);
ordersRouter.get("/", getOrdersHandler);
ordersRouter.get("/:id", getOrderByIdHandler);
ordersRouter.get("/user", getOrdersByUserHandler);

module.exports = ordersRouter;

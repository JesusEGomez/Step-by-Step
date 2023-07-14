const { Router } = require("express");

const {
  createOrderHandler,
  getOrderByIdHandler,
  getOrdersHandler,
} = require("../handlers/ordersHandler");

const ordersRouter = Router();

ordersRouter.post("/create", createOrderHandler);
ordersRouter.get("/", getOrdersHandler);
ordersRouter.get("/:id", getOrderByIdHandler);

module.exports = ordersRouter;

const { Router } = require("express");

const {
  createOrderHandler,
  getOrdersByEmailHandler,
  getOrdersHandler,
  updateOrderFullFillmentHandler,
} = require("../handlers/ordersHandler");

const ordersRouter = Router();

ordersRouter.post("/create", createOrderHandler);
ordersRouter.get("/", getOrdersHandler);
ordersRouter.get("/email", getOrdersByEmailHandler);
ordersRouter.put("/fullFillmentStatus", updateOrderFullFillmentHandler);

module.exports = ordersRouter;

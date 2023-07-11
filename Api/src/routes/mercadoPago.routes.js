const { Router } = require("express");
const mercadoPagoCheckout = require("../handlers/mercadoPagoHandler");

const mercadoPagoRouter = Router();

mercadoPagoRouter.post("/", mercadoPagoCheckout);

module.exports = mercadoPagoRouter;

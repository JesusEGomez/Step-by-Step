const { Router } = require("express");
const mercadoPagoCheckout = require("../handlers/mercadoPagoHandler");
const mercadoPagoNotify = require("../handlers/mercadoPagoNotify");

const mercadoPagoRouter = Router();

mercadoPagoRouter.post("/", mercadoPagoCheckout);
mercadoPagoRouter.post("/notify", mercadoPagoNotify);

module.exports = mercadoPagoRouter;

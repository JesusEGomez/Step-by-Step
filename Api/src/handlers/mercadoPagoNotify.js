const mercadopago = require("mercadopago");
const { ACCESS_TOKEN } = process.env;

mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

const mercadoPagoNotify = async (req, res) => {
  const response = req.query;
  console.log(response);
};

module.exports = mercadoPagoNotify;

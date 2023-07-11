const mercadopago = require("mercadopago");

mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN,
});

const mercadoPagoCheckout = async (req, res) => {
  const response = req.body;

  console.log(response);
  res.send("holi");
};
module.exports = mercadoPagoCheckout;

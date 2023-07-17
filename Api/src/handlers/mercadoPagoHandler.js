const mercadopago = require("mercadopago");
const { ACCESS_TOKEN } = process.env;
const { findById } = require("../utils/findBy");
const { successPurchase, failPurchase } = require("../config/mailling/handlerMail");

mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

const mercadoPagoCheckout = async (req, res) => {
  const carrito = req.body.carrito;
  const user = await findById(req.body.userId)
  const URL = "https://02bf-190-30-177-199.ngrok-free.app";
  try {
    const preference = {
      items: carrito.map((product) => ({
        title: product.model,
        unit_price: product.totalPrice,
        quantity: product.quantity,
        picture_url: product.images[0].imageUrl,
        id: product.id,
      })),
      auto_return: "approved",
      back_urls: {
        success: `${URL}`,
        failure: `${URL}`,
      },
      // notification_url: `${URL}/checkout/notify`,
      // notification_url: `http://localhost:3001/checkout/notify`,
    };
    const response = await mercadopago.preferences.create(preference);
    
    successPurchase(user.mail, user.name)
    return res.status(200).json({ url: response.body.init_point });
  } catch (error) {
    failPurchase(user.mail, user.name)
    res.status(500).json({ error: error.message });
  }
};
module.exports = mercadoPagoCheckout;

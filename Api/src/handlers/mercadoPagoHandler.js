const mercadopago = require("mercadopago");
const { ACCESS_TOKEN } = process.env;

mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

const mercadoPagoCheckout = async (req, res) => {
  const carrito = req.body.carrito;
  console.log(carrito);
  const URL = "http://127.0.0.1:5173";
  try {
    const preference = {
      items: carrito.map((product) => ({
        title: product.model,
        unit_price: product.totalPrice,
        quantity: product.quantity,
        picture_url: product.images[0].imageUrl,
      })),
      auto_return: "approved",
      back_urls: {
        success: `${URL}`,
        failure: `${URL}`,
      },
    };
    console.log(preference);
    const response = await mercadopago.preferences.create(preference);
    return res.status(200).json({ url: response.body.init_point });
  } catch (error) {
    res.status(500);
  }
};
module.exports = mercadoPagoCheckout;

const nodemailer = require("nodemailer");
const homeURL = "http://localhost:5173/tienda";
const MAIL = process.env.NEXT_MAIL;
const MAIL_PASSWORD = process.env.NEXT_MAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: MAIL,
    pass: MAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

async function welcomeEmail(email, displayName) {
  try {
    const info = await transporter.sendMail({
      from: `Bienvenido usuario ${MAIL}`,
      to: email,
      subject: "Bienvenido a Step-by-Step",
      html: `
        <h2> Bienvenido a Step-by-Step ${displayName} </h2>
        <h3> Estamos muy felices que nos hayas escogido para tus futuras compras. </h3>
        <h4> Ir a Step-by-Step haciendo clic aquí <a href="${homeURL}">${homeURL}</a></h4>
      `,
    });

    return info;
  } catch (error) {
    throw new Error("Error al enviar el correo de bienvenida: " + error.message);
  }
}

async function successPurchase(email, displayName) {
  try {
    const info = await transporter.sendMail({
      from: `Compra realizada ${MAIL}`,
      to: email,
      subject: "Compra realizada con éxito",
      html: `
        <h2> Hola ${displayName}</h2>
        <h3> Si estás recibiendo este email es porque tu compra en Step-by-Step ha sido realizada con éxito.</h3>
        <h5> Gracias por realizar la compra con nosotros. </h5>
      `,
    });

    return info;
  } catch (error) {
    throw new Error("Error al enviar el correo de compra exitosa: " + error.message);
  }
}

async function failPurchase(email, displayName) {
  try {
    const info = await transporter.sendMail({
      from: `Fallo en la compra ${MAIL}`,
      to: email,
      subject: "Ha habido un problema con el pago",
      html: `
        <h2> Hola ${displayName}!</h2>
        <h3> Si estás recibiendo este email es porque tu pago no se realizó con éxito, por favor intenta nuevamente más tarde.</h3>
        <h5> Si el problema persiste, ponte en contacto con el proveedor de tu tarjeta.</h5>
      `,
    });

    return info;
  } catch (error) {
    throw new Error("Error al enviar el correo de fallo en la compra: " + error.message);
  }
}

module.exports = {
  welcomeEmail,
  successPurchase,
  failPurchase,
};

const nodemailer = require("nodemailer");
const homeURL = "http://localhost:3000/tienda";
const MAIL = process.env.NEXT_MAIL;
const MAIL_PASSWORD = process.env.NEXT_MAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: MAIL, // generated ethereal user
    pass: MAIL_PASSWORD, // generated ethereal password
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function welcomeEmail(email, displayName) {
  try {
    const info = await transporter.sendMail({
      from: `Bienvenido usuario ${MAIL}`, // sender address
      to: email, // list of receivers
      subject: "Bienvenido a Step-by-Step", // Subject line
      // text: "Hello world?", // plain text body
      html: `
			<h2> Bienvenido a Step-by-Step ${displayName} </h2>
			<h3> Estamos muy felices que nos hayas escogidos para tus futuras compras. </h3>
			<h4> Ir a Step-by-Step clickeando aquí ${homeURL}</h4>
			`,
    });

    return info;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function successPurchase(email, displayName) {
  try {
    const info = await transporter.sendMail({
      from: `Compra realizada ${MAIL}`, // sender address
      to: email, // list of receivers
      subject: "Compra realizada con exito", // Subject line
      // text: "Hello world?", // plain text body
      html: `
			<h2> Hola ${displayName}</h2>
			<h3> Si estas recibiendo esta email es porque tu compra en  Step-by-Step ha sido realizada con exito.</h3>
			<h5> Gracias por realizar la compra con nosotros. </h5>
			`,
    });
    return info;
  } catch (error) {
    throw new Error(error.message);
  }
}
export async function failPurchase(email, displayName) {
  try {
    const info = await transporter.sendMail({
      from: `Fallo en la compra ${MAIL}`, // sender address
      to: email, // list of receivers
      subject: "Ha habido un problema con el pago", // Subject line
      // text: "Hello world?", // plain text body
      html: `
			<h2> Hola ${displayName} !</h2>
			<h3> Si estás reciebiendo este email es porque tu pago no se realizó con éxito, por favor intente nuevamente mas tarde.</h3>
			<h5> Si el problema persiste, contactesé con el proveedor de su tarjeta.</h5>
			`,
    });
    return info;
  } catch (error) {
    throw new Error(error.message);
  }
}

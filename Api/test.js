require('dotenv').config();

const {
  welcomeEmail,
  successPurchase,
  failPurchase
} = require('./src/config/mailling/handlerMail.js');

// Obtén la dirección de correo electrónico del usuario registrado desde tu sistema de almacenamiento de datos
const registeredUserEmail = 'cabreraclaudiof@gmail.com'; // Reemplaza esto con la lógica para obtener el correo electrónico del usuario registrado

async function sendEmailsToRegisteredUser(email) {
  try {
    // Llama a la función de bienvenida (welcomeEmail) y pasa el correo electrónico del usuario registrado
    await welcomeEmail(email, 'Usuario');

    // Llama a la función de compra exitosa (successPurchase) y pasa el correo electrónico del usuario registrado
    await successPurchase(email, 'Usuario');

    // Llama a la función de compra fallida (failPurchase) y pasa el correo electrónico del usuario registrado
    await failPurchase(email, 'Usuario');

    
  } catch (error) {

  }
}

sendEmailsToRegisteredUser();

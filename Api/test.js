require('dotenv').config();

const {
    welcomeEmail,
    successPurchase,
    failPurchase
  } = require('./src/config/mailling/handlerMail.js');
  
  async function test() {
    try {
      // Llama a la función de bienvenida (welcomeEmail)
      await welcomeEmail('cabreraclaudiof@gmail.com', 'Usuario');
  
      // Llama a la función de compra exitosa (successPurchase)
      await successPurchase('cabreraclaudiof@gmail.com', 'Usuario');
  
      // Llama a la función de compra fallida (failPurchase)
      await failPurchase('cabreraclaudiof@gmail.com', 'Usuario');
  
      console.log('Correos electrónicos enviados correctamente');
    } catch (error) {
      console.error('Error al enviar los correos electrónicos:', error);
    }
  }
  
  test();
  
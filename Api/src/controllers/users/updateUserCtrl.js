const { User } = require("../../db.js");
const { findById } = require("../../utils/findBy.js");

const updateUserCtrl = async (req, res) => {
  const { id } = req.params;
  const { isAdmin } = req.body
  try {
    // Obtengo todos los datos del usuario
    const user = await findById(User, id);
    // si no existe arroja este error.
    if (!user) {
      return res.status(404).json({ message: `No hay un usuario registrado con este id` });
    }

    user.isAdmin = isAdmin;
    // si encuentra el usuario, se realiza el cambio con la informacion entrante.
    // await user.update({
    //   // name,
    //   // lastname,
    //   // user,
    //   // mail,
    //   // phone,
    //   isAdmin,
    // });
    await user.save();

    return res.status(200).json({ message: `Solicitud de cambio con exito.`, usuario: user });

  } catch (error) {
    return res.status(500).json({ message: "Hubo un problema al procesar la solicitud", error: error.message, });
  }
};

module.exports = updateUserCtrl;

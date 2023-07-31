const { User } = require("../../db");
const { Op } = require("sequelize");
const { welcomeEmail } = require("../../handlers/maillingHandler");

const createUserCtrl = async (req, res) => {
  const { name, lastname, user, mail, isAdmin, pass } = req.body;

  try {
    const existsUserOrMail = await User.findOne({
      where: {
        [Op.or]: [
          { user: { [Op.iLike]: user } },
          { mail: { [Op.iLike]: mail } },
        ],
      },
    });

    // if (existsUserOrMail) {
    //   return res.status(409).json({
    //     message: `No se puede crear el usuario debido a que hay un conflicto con un dato único existente`,
    //   });
    //   // return;
    // }

    const newUser = await User.create({
      name,
      lastname,
      user,
      mail,
      isAdmin,
    });


    await welcomeEmail(newUser.mail, newUser.name)
    return res.status(201).json({ message: "Usuario creado exitosamente", usuario: newUser });

  } catch (error) {
    console.error("Error al crear el usuario:", error.message);
    return res
      .status(500)
      .json({ message: "Usuario no pudo ser creado", error: error.message });
  }
};

module.exports = createUserCtrl;

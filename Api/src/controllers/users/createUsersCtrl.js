const { User } = require("../../db");
const { Op } = require("sequelize");

const createUserCtrl = async (req, res) => {
  const { name, lastname, user, mail, phone, isAdmin, pass } = req.body;

  try {
    // const existsUser = await User.findAll({ where: { user: user } })
    // const existsMail = await User.findAll({ where: { mail: mail } })

    // Si existe un user y/o un mail registrado en la base de datos, no se podra crear un usuario, son valores unicos.
    const existsUserOrMail = await User.findOne({
      where: {
        [Op.or]: [
          { user: { [Op.iLike]: user } },
          { mail: { [Op.iLike]: mail } },
        ],
      },
    });

    if (existsUserOrMail) {
      return res.status(409).json({
        message: `No se puede crear el usuario debido a que hay un conflicto con un dato unico existente`,
      });
    }

    const newUser = await User.create({
      name,
      lastname,
      user,
      mail,
      phone,
      isAdmin,
      pass,
    });

    return res.status(201).json({ message: `Usuario creado exitosamente: `, usuario: newUser });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: `Usuario no pudo ser creado`, error: error.message });
  }
};

module.exports = createUserCtrl;

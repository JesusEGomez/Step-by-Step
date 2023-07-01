const { User } = require("../../db.js");

const userAllCtrl = async (req, res) => {
  try {
    const users = await User.findAll();

    if (!users.length) {
      return res
        .status(404)
        .json({ message: "No hay datos en la base de datos." });
    }
    return res.status(200).json(users.data);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = userAllCtrl;

const { User } = require('../../db.js');
const { findById } = require('../../utils/findBy.js')

const userByIdCtrl = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await findById(User, id)

        if (!user) {
            return res.status(404).json({ message: `No hay un usuario registrado con este id` })
        }
        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).json({ message: 'Hubo un problema al procesar la solicitud', error: error.message })
    }
}

module.exports = userByIdCtrl;
const { User } = require('../../db.js');

const deleteUserCtrl = async (req, res) => {
    const { id } = req.params;
    try {
        const existsUser = await User.findOne({ where: { id } })

        if (!existsUser) {
            return res.status(404).json({ message: `No hay un usuario registrado en la base de datos.` })
        }

        await User.destroy({ where: { id: existsUser.id } })

        return res.status(200).json({ message: `Usuario con el id: ${id} fue eliminado con exito.` })

    } catch (error) {
        return res.status(500).json({ message: 'No se pudo procesar la solicitud', error: error.message })
    }

}

module.exports = deleteUserCtrl;
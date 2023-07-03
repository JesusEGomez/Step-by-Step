const { Address, User } = require('../../db.js');
const { findById } = require('../../utils/findBy.js')
const createAddressCtrl = require('../address/createAddressCtrl.js')

const updateAddressCtrl = async (req, res) => {
    const { id } = req.params;
    const { country, province, city, neighborhood, street, nStreet, floor, user } = req.body;
    try {
        const existsUser = await findById(User, id);

        // Si el usuario existe, entonces actualiza la direccion regisitrada de la tabla adrress por la nueva.
        if (existsUser) {
            const newAddress = Address.update(
                { country, province, city, neighborhood, street, nStreet, floor }, { where: { id } })

            return res.status(200).json({
                data: {
                    message: 'Direccion fue creada con exito.',
                    address: newAddress
                }
            })
        }

        return createAddressCtrl();

    } catch (error) {
        return res.status(200).json({ error: { mesage: 'Hubo un problema al actualizar la direccion', details: error.message } })
    }

}

module.exports = updateAddressCtrl;
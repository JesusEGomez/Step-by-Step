const { Address, User } = require('../../db.js');
const { findById } = require('../../utils/findBy.js');


const createAddressCtrl = async (req, res) => {
    const { country, province, city, neighborhood, street, nStreet, floor, user } = req.body;
    try {
        const existsUser = await findById(User, user);


        if (!existsUser) {
            return res.status(404).json({
                error: { message: `No hay un usuario registrado con este id: ${id} existe en la base de datos.` }
            })
        }

        // si el usuario existe y tiene una direccion asociada arroja este error.
        if (existsUser.addressId) {
            return res.status(400).json({
                error: { message: 'Este usuario ya tiene una dirección asociada. Por favor, actualize la direccion existente en lugar de crear una nueva.' }
            })
        }
        // si existe y no tiene una direccion asociada, se crea la direccion y se asocia
        const newAddress = await Address.create({
            country, province, city, neighborhood, street, nStreet, floor
        })

        return res.status(201).json({
            data: {
                message: 'Direccion creada con exito.',
                address: newAddress
            }
        })

    } catch (error) {
        return res.status(500).json({
            error: {
                message: 'Hubo un problema al crear la direccion.',
                details: error.message
            }
        })
    }
}

module.exports = createAddressCtrl;
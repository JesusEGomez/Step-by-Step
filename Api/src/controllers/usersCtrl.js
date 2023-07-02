const { User } = require('../db');
// const { User } = require('../models'); // Asegúrate de tener la ruta correcta al modelo User

const UserController = {
    getUser(req, res) {
        const { id } = req.params;

        User.findByPk(id)
            .then((user) => {
                // Realiza el procesamiento adicional si es necesario
                res.json(user);
            })
            .catch((error) => {
                // Maneja el error de manera adecuada
                res.status(500).json({ error: 'Error al obtener el usuario' });
            });
    },

    createUser(req, res) {
        const { name, lastname, user, mail, phone, isAdmin, pass } = req.body;

        User.create({ name, lastname, user, mail, phone, isAdmin, pass })
            .then((user) => {
                // Realiza el procesamiento adicional si es necesario
                res.status(201).json(user);
            })
            .catch((error) => {
                // Maneja el error de manera adecuada
                res.status(500).json({ error: 'Error al crear el usuario' });
            });
    },

    updateUser(req, res) {
        const { id } = req.params;
        const { name, lastname, user, mail, phone, isAdmin, pass } = req.body;

        User.update({ name, lastname, user, mail, phone, isAdmin, pass }, { where: { id } })
            .then(() => {
                // Realiza el procesamiento adicional si es necesario
                res.json({ message: 'Usuario actualizado correctamente' });
            })
            .catch((error) => {
                // Maneja el error de manera adecuada
                res.status(500).json({ error: 'Error al actualizar el usuario' });
            });
    },

    deleteUser(req, res) {
        const { id } = req.params;

        User.destroy({ where: { id } })
            .then(() => {
                // Realiza el procesamiento adicional si es necesario
                res.json({ message: 'Usuario eliminado correctamente' });
            })
            .catch((error) => {
                // Maneja el error de manera adecuada
                res.status(500).json({ error: 'Error al eliminar el usuario' });
            });
    }
}

module.exports = UserController;

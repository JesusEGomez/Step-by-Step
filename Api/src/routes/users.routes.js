const { Router } = require("express");

const userAllCtrl = require('../controllers/users/usersAllCtrl.js');
const createUserCtrl = require('../controllers/users/createUsersCtrl.js');
const deleteUserCtrl = require('../controllers/users/deleteUserCtrl.js');
const userByIdCtrl = require('../controllers/users/userByIdCtrl.js');
const updateUserCtrl = require('../controllers/users/updateUserCtrl.js');

const usersRouter = Router();

usersRouter.post('/', createUserCtrl);
usersRouter.get('/', userAllCtrl);
usersRouter.delete('/:id', deleteUserCtrl);
usersRouter.get('/:id', userByIdCtrl);
usersRouter.put('/:id', updateUserCtrl);

module.exports = usersRouter;
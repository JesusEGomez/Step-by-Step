const { Router } = require("express");
const createAddress = require('../controllers/address/createAddressCtrl.js');
const updateAddressCtrl = require("../controllers/address/updateAddressCtrl.js");


const addressRoutes = Router()

addressRoutes.post('/', createAddress)
addressRoutes.put('/:id', updateAddressCtrl)

module.exports = addressRoutes;
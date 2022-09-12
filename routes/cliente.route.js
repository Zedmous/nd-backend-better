const { Router } = require('express');
const {allCliente, createCliente, updateCliente, deleteCliente, patchCliente } = require('../controllers/cliente.controller');
const router = Router();


router.get(
    '/',
    allCliente);

router.post(
    '/',
    createCliente)

router.put(
    '/:id',
    updateCliente)
/*
router.patch(
    '/',
    patchCliente)
*/
router.delete(
    '/:id',
    deleteCliente)

module.exports = router;
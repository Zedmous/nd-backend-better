const { response } = require('express');
const ClienteModel = require('../models/cliente.model')
//const { ClienteModel } = require('../config/db.config')



const allCliente = async (req, res = response) => {
  try {
    const clientes = await ClienteModel.findAll();
    let total=clientes.length;
    
    res.status(200).json({total,clientes});
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}
const createCliente = async (req, res = response) => {
  try {
    const { imagen,titulo,descripcion } = req.body;
   
    const cliente = await ClienteModel.create({ imagen,titulo,descripcion });
    res.status(200).json({ cliente });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}
const updateCliente = async (req, res = response) => {
  try {
    const id = req.params.id;
    const cliente = await ClienteModel.findOne({ where: { id } });
    if (!cliente) {
      return res.status(400).json("Cliente no encontrado");
    }
    const { imagen,titulo,descripcion } = req.body;
    cliente.imagen = imagen;
    cliente.titulo = titulo;
    cliente.descripcion = descripcion;
    await cliente.save();
    res.status(200).json({cliente});
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}
const deleteCliente = async (req, res = response) => {
  try {
    const id = req.params.id;
    const cliente = await ClienteModel.destroy({ where: { id } });
    if (!cliente) {
      return res.status(400).json("Cliente no encontrado");
    }
    res.status(200).json("Cliente removido!!");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}
const patchCliente = (req, res = response) => {
  res.json({ ok: true, msj: 'patch api' })
}
module.exports = {
  allCliente,
  createCliente,
  updateCliente,
  deleteCliente,
  patchCliente
}
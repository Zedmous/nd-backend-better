const { response } = require('express');

const PlanModel = require('../models/plan.model')
//const { PlanModel } = require('../config/db.config')



const allPlan = async (req, res = response) => {
  try {
    const planes = await PlanModel.findAll();
    let total=planes.length;
    
    res.status(200).json({total,planes});
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}
const createPlan = async (req, res = response) => {
  try {
    const { nombre,precio,caracteristicas } = req.body;
   
    const plan = await PlanModel.create({ nombre,precio,caracteristicas });
    res.status(200).json({ plan });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}
const updatePlan = async (req, res = response) => {
  try {
    const id = parseInt(req.params.id);
    const { nombre,precio,caracteristicas } = req.body;
    const plan = await PlanModel.findOne({ where: { id } });
    if (!plan) {
      return res.status(400).json("Plan no encontrado");
    }
    
    plan.nombre = nombre;
    plan.precio = precio;
    plan.caracteristicas = caracteristicas;
    await plan.save();
    res.status(200).json({plan});
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}
const deletePlan = async (req, res = response) => {
  try {
    const id = req.params.id;
    const plan = await PlanModel.destroy({ where: { id } });
    if (!plan) {
      return res.status(400).json("Plan no encontrado");
    }
    res.status(200).json("Plan removido!!");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}
const patchPlan = (req, res = response) => {
  res.json({ ok: true, msj: 'patch api' })
}
module.exports = {
  allPlan,
  createPlan,
  updatePlan,
  deletePlan,
  patchPlan
}
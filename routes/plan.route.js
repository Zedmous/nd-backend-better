const { Router } = require('express');
const {allPlan, createPlan, updatePlan, deletePlan, patchPlan } = require('../controllers/plan.controller');
const router = Router();


router.get(
    '/',
    allPlan);

router.post(
    '/',
    createPlan)

router.put(
    '/:id',
    updatePlan)
/*
router.patch(
    '/',
    patchPlan)
*/
router.delete(
    '/:id',
    deletePlan)

module.exports = router;
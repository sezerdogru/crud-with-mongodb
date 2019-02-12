const express = require('express');
const router = express.Router();
const appointmentController = require('../app/controllers/appointments');

router.get('/', appointmentController.getAll);
router.post('/', appointmentController.create);
router.get('/:appointmentId', appointmentController.getById);
router.put('/:appointmentId', appointmentController.updateById);
router.delete('/:appointmentId', appointmentController.deleteById);

module.exports = router;
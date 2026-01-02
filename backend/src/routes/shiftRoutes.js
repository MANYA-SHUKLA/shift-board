const express = require('express');
const router = express.Router();
const shiftController = require('../controllers/shiftController');
const { authenticate, authorize } = require('../middleware/auth');
const { shiftValidation, getShiftsValidation } = require('../utils/validation');

router.post('/', authenticate, shiftValidation, shiftController.createShift);
router.get('/', authenticate, getShiftsValidation, shiftController.getShifts);
router.delete('/:id', authenticate, shiftController.deleteShift);

module.exports = router;


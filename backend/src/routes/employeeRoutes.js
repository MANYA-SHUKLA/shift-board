const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const { authenticate } = require('../middleware/auth');

router.get('/', authenticate, employeeController.getEmployees);

module.exports = router;


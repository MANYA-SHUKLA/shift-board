const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { loginValidation } = require('../utils/validation');

router.post('/', loginValidation, authController.login);

module.exports = router;


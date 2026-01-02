const { body, validationResult, query } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const loginValidation = [
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required'),
  handleValidationErrors,
];

const shiftValidation = [
  body('employeeId').notEmpty().withMessage('Employee ID is required'),
  body('date')
    .matches(/^\d{4}-\d{2}-\d{2}$/)
    .withMessage('Date must be in YYYY-MM-DD format'),
  body('startTime')
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .withMessage('Start time must be in HH:mm format (24-hour)'),
  body('endTime')
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .withMessage('End time must be in HH:mm format (24-hour)'),
  handleValidationErrors,
];

const getShiftsValidation = [
  query('employee').optional().isString(),
  query('date').optional().matches(/^\d{4}-\d{2}-\d{2}$/).withMessage('Date must be in YYYY-MM-DD format'),
  handleValidationErrors,
];

module.exports = {
  loginValidation,
  shiftValidation,
  getShiftsValidation,
};


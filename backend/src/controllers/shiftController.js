const shiftService = require('../services/shiftService');

async function createShift(req, res) {
  try {
    const shift = await shiftService.createShift({
      employeeId: req.body.employeeId,
      date: req.body.date,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
    });

    res.status(201).json(shift);
  } catch (error) {
    if (error.message.includes('overlap') || error.message.includes('4 hours')) {
      return res.status(400).json({ error: error.message });
    }
    console.error('Create shift error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getShifts(req, res) {
  try {
    const filters = {
      employee: req.query.employee,
      date: req.query.date,
    };

    const shifts = await shiftService.getShifts(
      filters,
      req.user.role,
      req.user.employeeId
    );

    res.json(shifts);
  } catch (error) {
    console.error('Get shifts error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function deleteShift(req, res) {
  try {
    await shiftService.deleteShift(
      req.params.id,
      req.user.role,
      req.user.employeeId
    );

    res.json({ message: 'Shift deleted successfully' });
  } catch (error) {
    if (error.message.includes('not found') || error.message.includes('own shifts')) {
      return res.status(404).json({ error: error.message });
    }
    console.error('Delete shift error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  createShift,
  getShifts,
  deleteShift,
};


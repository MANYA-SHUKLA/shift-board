const prisma = require('../config/database');

async function getEmployees(req, res) {
  try {
    const employees = await prisma.employee.findMany({
      select: {
        id: true,
        name: true,
        employeeCode: true,
        department: true,
      },
      orderBy: {
        name: 'asc',
      },
    });

    res.json(employees);
  } catch (error) {
    console.error('Get employees error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getEmployees,
};


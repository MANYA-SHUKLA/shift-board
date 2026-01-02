const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');

  // Hash passwords
  const adminPassword = await bcrypt.hash('Admin@2025!', 10);
  const userPassword = await bcrypt.hash('HireMe@2025!', 10);

  // Create Admin Employee and User
  const adminEmployee = await prisma.employee.upsert({
    where: { employeeCode: 'ADMIN001' },
    update: {},
    create: {
      name: 'Admin User',
      employeeCode: 'ADMIN001',
      department: 'Administration',
      user: {
        create: {
          email: 'admin@shiftboard.com',
          password: adminPassword,
          role: 'admin',
        },
      },
    },
    include: { user: true },
  });

  // Create Demo User Employee and User (hire-me@anshumat.org)
  const demoEmployee = await prisma.employee.upsert({
    where: { employeeCode: 'EMP001' },
    update: {},
    create: {
      name: 'Demo Employee',
      employeeCode: 'EMP001',
      department: 'Engineering',
      user: {
        create: {
          email: 'hire-me@anshumat.org',
          password: userPassword,
          role: 'user',
        },
      },
    },
    include: { user: true },
  });

  // Create additional employees for testing
  const emp2 = await prisma.employee.upsert({
    where: { employeeCode: 'EMP002' },
    update: {},
    create: {
      name: 'John Doe',
      employeeCode: 'EMP002',
      department: 'Sales',
      user: {
        create: {
          email: 'john@example.com',
          password: await bcrypt.hash('Password123!', 10),
          role: 'user',
        },
      },
    },
  });

  const emp3 = await prisma.employee.upsert({
    where: { employeeCode: 'EMP003' },
    update: {},
    create: {
      name: 'Jane Smith',
      employeeCode: 'EMP003',
      department: 'Marketing',
      user: {
        create: {
          email: 'jane@example.com',
          password: await bcrypt.hash('Password123!', 10),
          role: 'user',
        },
      },
    },
  });

  console.log('Seed completed!');
  console.log('Created users:');
  console.log('- Admin: admin@shiftboard.com / Admin@2025!');
  console.log('- Demo: hire-me@anshumat.org / HireMe@2025!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


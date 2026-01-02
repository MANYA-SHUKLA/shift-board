const { PrismaClient } = require('@prisma/client');

// Prisma Client - Connection pooling is handled automatically
const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

// Handle MongoDB connection errors
prisma.$connect().catch((error) => {
  console.error('Failed to connect to MongoDB:', error);
  if (error.code === 'P1001') {
    console.error('Cannot reach database server. Please check your DATABASE_URL.');
  } else if (error.code === 'P1000') {
    console.error('Authentication failed. Please check your database credentials.');
  }
  process.exit(1);
});

// Graceful shutdown
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});

module.exports = prisma;


const prisma = require('../config/database');

/**
 * Calculate hours between two times (HH:mm format)
 */
function calculateHours(startTime, endTime) {
  const [startHour, startMin] = startTime.split(':').map(Number);
  const [endHour, endMin] = endTime.split(':').map(Number);
  
  const startMinutes = startHour * 60 + startMin;
  const endMinutes = endHour * 60 + endMin;
  
  // Handle overnight shifts (end time is next day)
  const diffMinutes = endMinutes >= startMinutes 
    ? endMinutes - startMinutes 
    : (24 * 60) - startMinutes + endMinutes;
  
  return diffMinutes / 60;
}

/**
 * Check if two time ranges overlap on the same date
 */
function doTimesOverlap(start1, end1, start2, end2) {
  const [s1h, s1m] = start1.split(':').map(Number);
  const [e1h, e1m] = end1.split(':').map(Number);
  const [s2h, s2m] = start2.split(':').map(Number);
  const [e2h, e2m] = end2.split(':').map(Number);
  
  const s1 = s1h * 60 + s1m;
  const e1 = e1h * 60 + e1m;
  const s2 = s2h * 60 + s2m;
  const e2 = e2h * 60 + e2m;
  
  // Handle overnight shifts
  const e1Adjusted = e1 < s1 ? e1 + 24 * 60 : e1;
  const e2Adjusted = e2 < s2 ? e2 + 24 * 60 : e2;
  const s2Adjusted = e2 < s2 ? s2 + 24 * 60 : s2;
  const s1Adjusted = e1 < s1 ? s1 + 24 * 60 : s1;
  
  // Check overlap
  return (s1Adjusted < e2Adjusted && s2Adjusted < e1Adjusted);
}

async function createShift(data) {
  // Business Rule: Cannot create shift in the past
  const shiftDateTime = new Date(`${data.date}T${data.startTime}`);
  const now = new Date();
  
  if (shiftDateTime < now) {
    throw new Error('Cannot create a shift in the past. Please select a future date and time.');
  }

  // Business Rule 2: Shift must be minimum 4 hours
  const hours = calculateHours(data.startTime, data.endTime);
  if (hours < 4) {
    throw new Error('Shift must be at least 4 hours long');
  }

  // Business Rule 1: Check for overlapping shifts on the same date
  const existingShifts = await prisma.shift.findMany({
    where: {
      employeeId: data.employeeId,
      date: data.date,
    },
  });

  for (const existingShift of existingShifts) {
    if (doTimesOverlap(data.startTime, data.endTime, existingShift.startTime, existingShift.endTime)) {
      throw new Error('Shift overlaps with an existing shift on the same date');
    }
  }

  // Create the shift
  return await prisma.shift.create({
    data: {
      employeeId: data.employeeId,
      date: data.date,
      startTime: data.startTime,
      endTime: data.endTime,
    },
    include: {
      employee: {
        select: {
          id: true,
          name: true,
          employeeCode: true,
          department: true,
        },
      },
    },
  });
}

async function getShifts(filters, userRole, userEmployeeId) {
  const where = {};

  // Business Rule 3: Normal users see only their own shifts
  if (userRole === 'user') {
    where.employeeId = userEmployeeId;
  }

  // Apply filters
  if (filters.employee) {
    where.employeeId = filters.employee;
  }

  if (filters.date) {
    where.date = filters.date;
  }

  return await prisma.shift.findMany({
    where,
    include: {
      employee: {
        select: {
          id: true,
          name: true,
          employeeCode: true,
          department: true,
        },
      },
    },
    orderBy: [
      { date: 'asc' },
      { startTime: 'asc' },
    ],
  });
}

async function deleteShift(shiftId, userRole, userEmployeeId) {
  const shift = await prisma.shift.findUnique({
    where: { id: shiftId },
    include: { employee: true },
  });

  if (!shift) {
    throw new Error('Shift not found');
  }

  // Normal users can only delete their own shifts
  if (userRole === 'user' && shift.employeeId !== userEmployeeId) {
    throw new Error('You can only delete your own shifts');
  }

  return await prisma.shift.delete({
    where: { id: shiftId },
  });
}

module.exports = {
  createShift,
  getShifts,
  deleteShift,
};


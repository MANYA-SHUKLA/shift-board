require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const shiftRoutes = require('./routes/shiftRoutes');
const shiftController = require('./controllers/shiftController');
const { authenticate } = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/login', authRoutes);
app.use('/employees', employeeRoutes);
app.use('/shifts', shiftRoutes);
// Also support singular form for DELETE as per requirements: DELETE /shift/:id
app.delete('/shift/:id', authenticate, shiftController.deleteShift);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


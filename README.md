# Employee Shift Board

<div align="center">

![Shift Board](https://img.shields.io/badge/Shift%20Board-v1.0.0-blue?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)

A modern, full-stack employee shift management system with authentication, role-based access control, and intelligent business validation rules.

[Features](#-features) • [Tech Stack](#️-tech-stack) • [Quick Start](#-quick-start) • [Deployment](#-deployment) • [API Documentation](#-api-documentation) • [Contributing](#-contributing)

</div>

---

## 📖 About

**Employee Shift Board** is a comprehensive web application designed to streamline shift management for organizations. Built with modern technologies and best practices, it provides a seamless experience for both administrators and employees to manage work schedules efficiently.

### What is Shift Board?

Shift Board is a full-stack application that enables:
- **Administrators** to create, view, and manage shifts for all employees
- **Employees** to view their own shifts and manage their schedules
- **Automatic validation** to prevent scheduling conflicts and ensure compliance with business rules
- **Role-based access control** to maintain security and data privacy

### Key Highlights

- 🔐 **Secure Authentication**: JWT-based authentication with password hashing
- 👥 **Role-Based Access**: Separate views and permissions for Admins and Employees
- ✅ **Smart Validation**: Prevents overlapping shifts and enforces minimum shift duration
- 🎨 **Modern UI**: Beautiful, responsive interface built with Tailwind CSS
- 🚀 **Fast & Scalable**: Built with Next.js and optimized for performance
- 📱 **Mobile-Friendly**: Fully responsive design that works on all devices

### Use Cases

- **Small to Medium Businesses**: Manage employee schedules efficiently
- **Retail Stores**: Schedule staff shifts with conflict prevention
- **Restaurants**: Coordinate kitchen and service staff schedules
- **Healthcare Facilities**: Manage nurse and staff rotations
- **Call Centers**: Organize agent shifts and coverage

---

## 🎯 Features

### Authentication & Security
- ✅ JWT-based authentication system
- ✅ Secure password hashing with bcryptjs
- ✅ Role-based access control (Admin/User)
- ✅ Protected API routes with middleware
- ✅ Session management with token expiration

### Employee Management
- ✅ View all employees (Admin only)
- ✅ Employee profiles with department information
- ✅ Unique employee codes for identification
- ✅ Employee-employee relationship tracking

### Shift Management
- ✅ Create new shifts with validation
- ✅ View shifts with filtering options
- ✅ Delete shifts with permission checks
- ✅ Filter shifts by employee and date
- ✅ Real-time shift duration calculation
- ✅ Statistics dashboard (total shifts, hours, employees)

### Business Rules & Validation
- ✅ **No Overlapping Shifts**: Prevents double-booking for the same employee on the same date
- ✅ **Minimum 4-Hour Duration**: Ensures shifts meet minimum work requirements
- ✅ **Future Date Validation**: Prevents creating shifts in the past
- ✅ **Overnight Shift Support**: Handles shifts that span midnight correctly
- ✅ **Role-Based Permissions**: Users can only manage their own shifts; Admins can manage all

### User Interface
- ✅ Modern, gradient-based design
- ✅ Responsive layout for all screen sizes
- ✅ Interactive forms with validation feedback
- ✅ Real-time error and success notifications
- ✅ Loading states and animations
- ✅ Confirmation modals for destructive actions
- ✅ Statistics cards with visual indicators

---

## 🏗️ Tech Stack

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 18+ | Runtime environment |
| **Express.js** | 4.18.2 | Web framework |
| **Prisma** | 5.19.0 | ORM and database toolkit |
| **MongoDB** | Latest | Database (via MongoDB Atlas) |
| **JWT** | 9.0.2 | Authentication tokens |
| **bcryptjs** | 2.4.3 | Password hashing |
| **express-validator** | 7.0.1 | Request validation |
| **CORS** | 2.8.5 | Cross-origin resource sharing |
| **dotenv** | 16.4.5 | Environment variable management |

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.1.1 | React framework |
| **React** | 19.2.3 | UI library |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 4.x | Styling framework |
| **ESLint** | 9.x | Code linting |

### Development Tools

- **Nodemon**: Auto-restart server during development
- **Prisma Studio**: Database GUI for development
- **Postman**: API testing (collection included)

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (v9 or higher) - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)

### Recommended Tools

- **VS Code** - [Download](https://code.visualstudio.com/)
- **Postman** - [Download](https://www.postman.com/) (for API testing)
- **Prisma Studio** - Included with Prisma (run `npm run db:studio`)

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd shift-board
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Or create .env manually with the following content:
```

**Backend `.env` file:**
```env
PORT=3001
JWT_SECRET=your-super-secret-jwt-key-change-in-production
DATABASE_URL="mongodb://localhost:27017/shiftboard"
# Or use MongoDB Atlas: mongodb+srv://user:pass@cluster.mongodb.net/shiftboard?retryWrites=true&w=majority
```

```bash
# Generate Prisma client
npm run db:generate

# Seed the database with initial data
npm run db:seed
# Note: MongoDB doesn't use migrations - just generate and seed!

# Start the development server
npm run dev
```

The backend API will be running on `http://localhost:3001`

### 3. Frontend Setup

Open a new terminal window:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local
# Or create .env.local manually with the following content:
```

**Frontend `.env.local` file:**
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

```bash
# Start the development server
npm run dev
```

The frontend will be running on `http://localhost:3000`

### 4. Access the Application

1. Open your browser and navigate to `http://localhost:3000`
2. Use the demo credentials below to log in

---

## 🔑 Demo Login Credentials

### Admin User
- **Email**: `admin@shiftboard.com`
- **Password**: `Admin@2025!`
- **Access**: Full access to all features, can manage all employees and shifts

### Demo Employee User
- **Email**: `hire-me@anshumat.org`
- **Password**: `HireMe@2025!`
- **Access**: Can view and manage only their own shifts

---

## 📡 API Documentation

### Base URL

```
http://localhost:3001
```

### Authentication

All protected routes require a JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

The token is obtained by logging in via the `/login` endpoint.

### API Endpoints

#### 1. POST /login

Authenticate user and receive JWT token.

**Request:**
```http
POST /login
Content-Type: application/json

{
  "email": "hire-me@anshumat.org",
  "password": "HireMe@2025!"
}
```

**Response (200 OK):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "clxxx",
    "email": "hire-me@anshumat.org",
    "role": "user",
    "employee": {
      "id": "clyyy",
      "name": "Demo Employee",
      "employeeCode": "EMP001",
      "department": "Engineering"
    }
  }
}
```

**Error Responses:**
- `400`: Validation error (missing email or password)
- `401`: Invalid email or password

---

#### 2. GET /employees

Get list of all employees (requires authentication).

**Request:**
```http
GET /employees
Authorization: Bearer <token>
```

**Response (200 OK):**
```json
[
  {
    "id": "clxxx",
    "name": "Demo Employee",
    "employeeCode": "EMP001",
    "department": "Engineering"
  },
  {
    "id": "clyyy",
    "name": "John Doe",
    "employeeCode": "EMP002",
    "department": "Sales"
  }
]
```

**Error Responses:**
- `401`: Authentication required

---

#### 3. POST /shifts

Create a new shift (requires authentication).

**Request:**
```http
POST /shifts
Authorization: Bearer <token>
Content-Type: application/json

{
  "employeeId": "clxxx",
  "date": "2025-01-15",
  "startTime": "09:00",
  "endTime": "17:00"
}
```

**Validation Rules:**
- `employeeId`: Required, must be a valid employee ID
- `date`: Required, must be in YYYY-MM-DD format, must be a future date
- `startTime`: Required, must be in HH:mm format (24-hour)
- `endTime`: Required, must be in HH:mm format (24-hour)
- Shift duration must be at least 4 hours
- No overlapping shifts for the same employee on the same date

**Response (201 Created):**
```json
{
  "id": "clzzz",
  "employeeId": "clxxx",
  "date": "2025-01-15",
  "startTime": "09:00",
  "endTime": "17:00",
  "employee": {
    "id": "clxxx",
    "name": "Demo Employee",
    "employeeCode": "EMP001",
    "department": "Engineering"
  },
  "createdAt": "2025-01-15T10:00:00.000Z",
  "updatedAt": "2025-01-15T10:00:00.000Z"
}
```

**Error Responses:**
- `400`: Validation error or business rule violation
  - "Shift must be at least 4 hours long"
  - "Shift overlaps with an existing shift on the same date"
  - "Cannot create a shift in the past"
- `401`: Authentication required
- `500`: Internal server error

---

#### 4. GET /shifts

Get shifts (requires authentication).

**Request:**
```http
GET /shifts?employee=clxxx&date=2025-01-15
Authorization: Bearer <token>
```

**Query Parameters:**
- `employee` (optional): Filter by employee ID
- `date` (optional): Filter by date (YYYY-MM-DD format)

**Response (200 OK):**
```json
[
  {
    "id": "clzzz",
    "employeeId": "clxxx",
    "date": "2025-01-15",
    "startTime": "09:00",
    "endTime": "17:00",
    "employee": {
      "id": "clxxx",
      "name": "Demo Employee",
      "employeeCode": "EMP001",
      "department": "Engineering"
    },
    "createdAt": "2025-01-15T10:00:00.000Z",
    "updatedAt": "2025-01-15T10:00:00.000Z"
  }
]
```

**Note:** 
- Normal users will only see their own shifts
- Admins can see all shifts
- Filters are applied based on user role

**Error Responses:**
- `401`: Authentication required

---

#### 5. DELETE /shift/:id

Delete a shift (requires authentication).

**Request:**
```http
DELETE /shift/clzzz
Authorization: Bearer <token>
```

**Response (200 OK):**
```json
{
  "message": "Shift deleted successfully"
}
```

**Error Responses:**
- `401`: Authentication required
- `404`: Shift not found or insufficient permissions
  - Normal users can only delete their own shifts
  - Admins can delete any shift

---

#### 6. GET /health

Health check endpoint (no authentication required).

**Request:**
```http
GET /health
```

**Response (200 OK):**
```json
{
  "status": "ok"
}
```

---

## 🧪 Testing with Postman

A Postman collection is provided for easy API testing.

### Import Postman Collection

1. Open Postman
2. Click **Import** button
3. Select the file `Shift_Board_API.postman_collection.json`
4. The collection will be imported with all endpoints

### Set Up Environment Variables

1. Create a new environment in Postman
2. Add the following variables:
   - `base_url`: `http://localhost:3001`
   - `token`: (will be set automatically after login)

### Postman Collection Structure

1. **Authentication**
   - Login as Admin - POST /login
   - Login as Demo User - POST /login

2. **Employees**
   - Get All Employees - GET /employees

3. **Shifts**
   - Create Shift - POST /shifts
   - Get All Shifts - GET /shifts
   - Get Shifts by Employee - GET /shifts?employee=xxx
   - Get Shifts by Date - GET /shifts?date=2025-01-15
   - Delete Shift - DELETE /shift/:id

4. **Health Check**
   - Health Check - GET /health

### Using the Collection

1. Start with the **Login** request to get your token
2. The token will be automatically saved to the `token` variable
3. Subsequent requests will use this token automatically
4. Test different scenarios:
   - Create shifts with valid data
   - Try to create overlapping shifts (should fail)
   - Try to create shifts less than 4 hours (should fail)
   - Filter shifts by employee and date

---

## 📁 Project Structure

```
shift-board/
├── backend/                          # Backend API server
│   ├── prisma/                       # Database configuration
│   │   ├── schema.prisma            # Prisma schema (database models)
│   │   └── seed.js                  # Database seed script
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js          # Prisma client configuration
│   │   ├── controllers/             # Request handlers
│   │   │   ├── authController.js    # Authentication logic
│   │   │   ├── employeeController.js # Employee management
│   │   │   └── shiftController.js   # Shift management
│   │   ├── middleware/
│   │   │   └── auth.js              # JWT authentication middleware
│   │   ├── routes/                  # API routes
│   │   │   ├── authRoutes.js        # Authentication routes
│   │   │   ├── employeeRoutes.js    # Employee routes
│   │   │   └── shiftRoutes.js       # Shift routes
│   │   ├── services/                # Business logic
│   │   │   └── shiftService.js      # Shift validation and business rules
│   │   ├── utils/
│   │   │   └── validation.js        # Request validation helpers
│   │   └── server.js                # Express server setup
│   ├── .env                         # Environment variables (create this)
│   ├── .env.example                 # Environment variables template
│   ├── package.json                 # Backend dependencies
│   └── package-lock.json            # Dependency lock file
├── frontend/                         # Frontend Next.js application
│   ├── app/                         # Next.js app directory
│   │   ├── dashboard/
│   │   │   └── page.tsx             # Dashboard page (main app)
│   │   ├── login/
│   │   │   └── page.tsx             # Login page
│   │   ├── layout.tsx               # Root layout component
│   │   ├── page.tsx                 # Home page (landing)
│   │   ├── globals.css              # Global styles
│   │   └── favicon.ico              # Site favicon
│   ├── lib/                         # Utility libraries
│   │   ├── api.ts                   # API client functions
│   │   └── auth.tsx                 # Authentication context
│   ├── .env.local                   # Frontend environment variables (create this)
│   ├── .env.local.example           # Environment variables template
│   ├── package.json                 # Frontend dependencies
│   ├── package-lock.json            # Dependency lock file
│   ├── tsconfig.json                # TypeScript configuration
│   ├── next.config.ts               # Next.js configuration
│   ├── postcss.config.mjs           # PostCSS configuration
│   └── eslint.config.mjs            # ESLint configuration
├── Shift_Board_API.postman_collection.json  # Postman API collection
└── README.md                         # This file
```

---

## 🔒 Business Rules Implementation

### 1. No Overlapping Shifts

**Rule**: An employee cannot have overlapping shifts on the same date.

**Implementation**: 
- Located in `backend/src/services/shiftService.js`
- Checks if new shift times overlap with existing shifts
- Handles overnight shifts correctly (e.g., 22:00 - 06:00)
- Returns error: `"Shift overlaps with an existing shift on the same date"`

**Example:**
- Existing shift: 09:00 - 17:00
- New shift: 16:00 - 20:00 ❌ (overlaps)
- New shift: 18:00 - 22:00 ✅ (no overlap)

### 2. Minimum 4-Hour Shift Duration

**Rule**: All shifts must be at least 4 hours long.

**Implementation**:
- Located in `backend/src/services/shiftService.js`
- Calculates duration between start and end times
- Handles overnight shifts correctly
- Returns error: `"Shift must be at least 4 hours long"`

**Example:**
- 09:00 - 13:00 ✅ (4 hours)
- 09:00 - 12:00 ❌ (3 hours)
- 22:00 - 02:00 ✅ (4 hours, overnight)

### 3. Role-Based Access Control

**Rule**: Users can only manage their own shifts; Admins can manage all shifts.

**Implementation**:
- Middleware: `backend/src/middleware/auth.js`
- Service layer: `backend/src/services/shiftService.js`
- Frontend: Role-based UI rendering

**Permissions:**

| Action | Normal User | Admin |
|--------|-------------|-------|
| View own shifts | ✅ | ✅ |
| View all shifts | ❌ | ✅ |
| Create own shift | ❌ | ✅ |
| Create shift for any employee | ❌ | ✅ |
| Delete own shift | ✅ | ✅ |
| Delete any shift | ❌ | ✅ |
| View employees | ❌ | ✅ |

### 4. Future Date Validation

**Rule**: Shifts cannot be created in the past.

**Implementation**:
- Frontend validation in `frontend/app/dashboard/page.tsx`
- Prevents form submission for past dates

---

## 🛠️ Development

### Available Scripts

#### Backend Scripts

```bash
# Development
npm run dev              # Start development server with nodemon

# Production
npm start                # Start production server

# Database
npm run db:generate      # Generate Prisma client
npm run db:seed          # Seed database with initial data
npm run db:studio        # Open Prisma Studio (database GUI)
# Note: MongoDB doesn't use migrations - just generate and seed!
```

#### Frontend Scripts

```bash
# Development
npm run dev              # Start Next.js development server

# Production
npm run build            # Build for production
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint
```

### Development Workflow

1. **Start Backend**:
   ```bash
   cd backend
   npm run dev
   ```

2. **Start Frontend** (in a new terminal):
   ```bash
   cd frontend
   npm run dev
   ```

3. **Make Changes**:
   - Backend changes will auto-reload (nodemon)
   - Frontend changes will hot-reload (Next.js)

4. **Database Changes**:
   ```bash
   # After modifying schema.prisma
   npm run db:generate
   # MongoDB is schema-less, no migrations needed!
   ```

### Environment Variables

#### Backend (.env)

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `3001` |
| `JWT_SECRET` | Secret key for JWT tokens | `your-super-secret-key` |
| `DATABASE_URL` | Prisma database connection string | `file:./prisma/dev.db` |

#### Frontend (.env.local)

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | `http://localhost:3001` |

---

## 🐛 Troubleshooting

### Backend Issues

#### Database connection error
```bash
# Solution: Check DATABASE_URL in .env file
# For local: mongodb://localhost:27017/shiftboard
# For Atlas: mongodb+srv://user:pass@cluster.mongodb.net/shiftboard?retryWrites=true&w=majority
```

#### Prisma client not generated
```bash
# Solution: Generate Prisma client
cd backend
npm run db:generate
```

#### Port already in use
```bash
# Solution: Change PORT in .env file
PORT=3002  # Use a different port
```

#### Seed data not working
```bash
# Solution: Ensure Prisma client is generated
cd backend
npm run db:generate
npm run db:seed
```

#### JWT authentication errors
- Check that `JWT_SECRET` is set in `.env`
- Ensure token is being sent in Authorization header
- Verify token hasn't expired

### Frontend Issues

#### API connection errors
- Verify `NEXT_PUBLIC_API_URL` in `.env.local` matches backend URL
- Ensure backend server is running
- Check CORS settings in backend

#### Authentication not working
- Check that backend `JWT_SECRET` is set
- Verify token is being stored in localStorage
- Check browser console for errors

#### Type errors
```bash
# Solution: Reinstall dependencies
cd frontend
rm -rf node_modules package-lock.json
npm install
```

#### Build errors
```bash
# Solution: Clear Next.js cache
cd frontend
rm -rf .next
npm run build
```

### Common Issues

#### CORS errors
- Backend CORS is configured to allow all origins in development
- For production, update CORS settings in `backend/src/server.js`

#### Database locked
- Close Prisma Studio if it's open
- Ensure no other process is using the database

---

## 🚀 Deployment

### Quick Deploy (Recommended - MongoDB + Render)

**Fastest way to get your app live (~10 minutes):**

1. **Database**: Create MongoDB Atlas cluster (Free tier)
2. **Backend**: Deploy to [Render](https://render.com) (Free tier available)
3. **Frontend**: Deploy to [Vercel](https://vercel.com) (Free tier)

📖 **Detailed Guides:**
- **[MONGODB_QUICK_START.md](./MONGODB_QUICK_START.md)** - 5-minute quick start
- **[MONGODB_DEPLOYMENT.md](./MONGODB_DEPLOYMENT.md)** - Complete step-by-step guide

### Deployment Options

#### Database
- ⭐ **MongoDB Atlas** - Recommended, free tier (M0), 512 MB storage
- **Render MongoDB** - If available on Render platform

#### Backend Platforms
- ⭐ **Render** - Recommended, free tier available
- **Railway** - Easy setup, auto-detects Node.js
- **Heroku** - Classic platform, requires credit card
- **DigitalOcean** - App Platform or Droplets

#### Frontend Platforms
- ⭐ **Vercel** - Best for Next.js, zero config, free tier
- **Netlify** - Great alternative, easy setup
- **Render** - Can host both frontend and backend

### Quick Start (MongoDB + Render)

**Database (MongoDB Atlas):**
```bash
# 1. Sign up at MongoDB Atlas
# 2. Create free M0 cluster
# 3. Create database user
# 4. Configure network access (allow 0.0.0.0/0)
# 5. Get connection string: mongodb+srv://user:pass@cluster.mongodb.net/shiftboard?retryWrites=true&w=majority
```

**Backend on Render:**
```bash
# 1. Create Web Service, connect GitHub repo
# 2. Root Directory: backend
# 3. Build Command: npm install && npm run db:generate
# 4. Start Command: npm start
# 5. Environment variables:
#    - DATABASE_URL (MongoDB Atlas connection string)
#    - JWT_SECRET (your secret key)
#    - NODE_ENV=production
# 6. After deployment, run in Shell: npm run db:seed
```

**Frontend on Vercel:**
```bash
# 1. Import GitHub repo
# 2. Root Directory: frontend
# 3. Environment variable:
#    - NEXT_PUBLIC_API_URL (your Render backend URL)
# 4. Deploy automatically
```

### Production Checklist

- ✅ Create MongoDB Atlas cluster (free tier M0)
- ✅ Set strong `JWT_SECRET` (32+ characters)
- ✅ Enable HTTPS (automatic on Render/Vercel)
- ✅ Configure CORS for production domain
- ✅ Set up database backups (MongoDB Atlas provides)
- ✅ Monitor application logs
- ✅ Use environment variables for all secrets
- ✅ Run `db:seed` after first deployment

---

### Deployment Steps (MongoDB + Render)

1. **Create MongoDB Database**:
   - Sign up at MongoDB Atlas
   - Create free M0 cluster
   - Create database user
   - Configure network access
   - Copy connection string

2. **Deploy Backend** to Render:
   - Create Web Service, connect GitHub repo
   - Set root directory to `backend`
   - Set build command: `npm install && npm run db:generate`
   - Set start command: `npm start`
   - Add environment variables (JWT_SECRET, DATABASE_URL)
   - After deployment, run in Shell: `npm run db:seed`

3. **Deploy Frontend** to Vercel:
   - Connect your GitHub repository
   - Set root directory to `frontend`
   - Add environment variable: `NEXT_PUBLIC_API_URL` (your Render backend URL)
   - Deploy automatically

4. **Update CORS** in backend:
   - Add `FRONTEND_URL` environment variable in Render
   - CORS is already configured in `server.js`

---

## 📊 Database Schema

### User Model
```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String
  role      String   // "admin" or "user"
  employeeId String? @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  employee  Employee? @relation(fields: [employeeId], references: [id])
}
```

### Employee Model
```prisma
model Employee {
  id           String   @id @default(cuid())
  name         String
  employeeCode String   @unique
  department   String
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
  user         User?
  shifts       Shift[]
}
```

### Shift Model
```prisma
model Shift {
  id         String   @id @default(cuid())
  date       String   // Format: YYYY-MM-DD
  startTime  String   // Format: HH:mm
  endTime    String   // Format: HH:mm
  employeeId String
  employee   Employee @relation(fields: [employeeId], references: [id], onDelete: Cascade)
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
}
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test your changes**:
   - Test backend API endpoints
   - Test frontend functionality
   - Ensure no breaking changes
5. **Commit your changes**:
   ```bash
   git commit -m "Add: your feature description"
   ```
6. **Push to your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**

### Code Style Guidelines

- Use meaningful variable and function names
- Add comments for complex logic
- Follow existing code structure
- Write clean, readable code
- Test your changes before submitting

### Reporting Issues

If you find a bug or have a suggestion:

1. Check if the issue already exists
2. Create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)

---

## 🔮 Future Enhancements

### Planned Features

- [ ] **Shift Templates**: Create reusable shift templates
- [ ] **Recurring Shifts**: Schedule repeating shifts
- [ ] **Shift Swapping**: Allow employees to swap shifts
- [ ] **Notifications**: Email/SMS notifications for shift assignments
- [ ] **Calendar View**: Visual calendar representation of shifts
- [ ] **Export Functionality**: Export shifts to CSV/PDF
- [ ] **Time Tracking**: Clock in/out functionality
- [ ] **Reporting**: Analytics and reports dashboard
- [ ] **Multi-tenant Support**: Support for multiple organizations
- [ ] **Mobile App**: Native mobile applications
- [ ] **Shift Requests**: Employees can request shift changes
- [ ] **Approval Workflow**: Manager approval for shift changes
- [ ] **Integration**: Integration with payroll systems
- [ ] **Dark Mode**: Theme switching
- [ ] **Internationalization**: Multi-language support

### Technical Improvements

- [ ] **Unit Tests**: Add comprehensive test coverage
- [ ] **E2E Tests**: End-to-end testing with Cypress/Playwright
- [ ] **API Documentation**: Swagger/OpenAPI documentation
- [ ] **Performance Optimization**: Caching and query optimization
- [ ] **Real-time Updates**: WebSocket support for live updates
- [ ] **GraphQL API**: Alternative GraphQL endpoint
- [ ] **Microservices**: Break down into microservices
- [ ] **CI/CD**: Automated testing and deployment

---

## 📝 License

This project is created as an assignment submission. All rights reserved.

---

## 👤 Author

**Built as a full-stack developer assignment**

This project demonstrates proficiency in:
- ✅ RESTful API design and implementation
- ✅ Authentication and authorization systems
- ✅ Database modeling and ORM usage
- ✅ Business logic implementation
- ✅ Modern frontend development with React/Next.js
- ✅ Type safety with TypeScript
- ✅ Request validation and error handling
- ✅ Responsive UI/UX design
- ✅ Code organization and best practices

---

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **Prisma** team for the excellent ORM
- **Tailwind CSS** for the utility-first CSS framework
- **Express.js** community for the robust web framework
- All open-source contributors whose packages made this project possible

---

## 📞 Support

For questions, issues, or contributions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Review existing [Issues](../../issues)
3. Create a new [Issue](../../issues/new) with details

---

<div align="center">

**Made with ❤️ using modern web technologies**

⭐ Star this repo if you find it helpful!

</div>

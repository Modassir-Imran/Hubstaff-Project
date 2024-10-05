const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const cron = require('node-cron');
const projectRoutes = require('./routes/projectRoutes');
const screenshotRoutes = require('./routes/ScreenshotRoutes');
const AuthRoute = require('./routes/AuthRoute');
const { takeAndSaveScreenshot } = require('./controllers/screenshotController');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();
app.use('/api', AuthRoute);
// API routes
app.use('/api/projects', projectRoutes);
app.use('/api/screenshots', screenshotRoutes);

// Cron job to take a screenshot every 10 minutes
cron.schedule('*/1 * * * *', () => {
  console.log('Taking automatic screenshot...');
  takeAndSaveScreenshot().catch(console.error);
});

// Server Listening
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

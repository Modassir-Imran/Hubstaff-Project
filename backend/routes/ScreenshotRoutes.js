const express = require('express');
const {
  getAllScreenshots,
  getScreenshotById,
  triggerScreenshot
} = require('../controllers/screenshotController');

const router = express.Router();

// GET all screenshots (without image)
router.get('/', getAllScreenshots);

// GET screenshot by ID (with image)
router.get('/:id', getScreenshotById);

// POST trigger a new screenshot manually
router.post('/take-screenshot', triggerScreenshot); // Update to use the correct route

module.exports = router;

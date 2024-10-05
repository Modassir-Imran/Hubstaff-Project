// const Screenshot = require('../models/ScreenshotModel')
// const screenshot = require('screenshot-desktop')

// // Function to take and save screenshot
// const takeAndSaveScreenshot = async () => {
//   try {
//     const img = await screenshot()
//     const newScreenshot = new Screenshot({ image: img })
//     await newScreenshot.save()
//     console.log('Screenshot automatically taken and saved at', new Date())
//     return newScreenshot
//   } catch (error) {
//     console.error('Error taking automatic screenshot:', error)
//     throw error
//   }
// }

// // Manually trigger screenshot
// const triggerScreenshot = async (req, res) => {
//   try {
//     const newScreenshot = await takeAndSaveScreenshot()
//     res.status(201).json({
//       message: 'Screenshot taken and saved successfully',
//       id: newScreenshot._id
//     })
//   } catch (error) {
//     console.error('Error triggering screenshot:', error)
//     res.status(500).json({ message: 'Failed to take screenshot' })
//   }
// }

// // Get all screenshots (without image)
// const getAllScreenshots = async (req, res) => {
//   try {
//     const screenshots = await Screenshot.find()
//       .select('-image')
//       .sort('-timestamp')
//     res.json(screenshots)
//   } catch (error) {
//     console.error('Error fetching screenshots:', error)
//     res.status(500).json({ message: 'Failed to fetch screenshots' })
//   }
// }

// // Get a single screenshot by ID (with image)
// const getScreenshotById = async (req, res) => {
//   try {
//     const screenshot = await Screenshot.findById(req.params.id)
//     if (!screenshot) {
//       return res.status(404).json({ message: 'Screenshot not found' })
//     }
//     res.contentType('image/png')
//     res.send(screenshot.image)
//   } catch (error) {
//     console.error('Error fetching screenshot:', error)
//     res.status(500).json({ message: 'Failed to fetch screenshot' })
//   }
// }

// module.exports = {
//   takeAndSaveScreenshot,
//   getAllScreenshots,
//   getScreenshotById,
//   triggerScreenshot
// }


const Screenshot = require('../models/ScreenshotModel');
const screenshot = require('screenshot-desktop');

// Function to take and save screenshot
const takeAndSaveScreenshot = async () => {
  try {
    const img = await screenshot();
    const newScreenshot = new Screenshot({ image: img });
    await newScreenshot.save();
    console.log('Screenshot automatically taken and saved at', new Date());
    return newScreenshot;
  } catch (error) {
    console.error('Error taking automatic screenshot:', error);
    throw error;
  }
};

// Manually trigger screenshot
const triggerScreenshot = async (req, res) => {
  try {
    const newScreenshot = await takeAndSaveScreenshot();
    res.status(201).json({
      message: 'Screenshot taken and saved successfully',
      id: newScreenshot._id
    });
  } catch (error) {
    console.error('Error triggering screenshot:', error);
    res.status(500).json({ message: 'Failed to take screenshot' });
  }
};

// Get all screenshots (without image)
const getAllScreenshots = async (req, res) => {
  try {
    const screenshots = await Screenshot.find()
      .select('-image') // Exclude image field for listing
      .sort('-timestamp');
    res.json(screenshots);
  } catch (error) {
    console.error('Error fetching screenshots:', error);
    res.status(500).json({ message: 'Failed to fetch screenshots' });
  }
};

// Get a single screenshot by ID (with image)
const getScreenshotById = async (req, res) => {
  try {
    const screenshot = await Screenshot.findById(req.params.id);
    if (!screenshot) {
      return res.status(404).json({ message: 'Screenshot not found' });
    }
    res.contentType('image/png');
    res.send(screenshot.image);
  } catch (error) {
    console.error('Error fetching screenshot:', error);
    res.status(500).json({ message: 'Failed to fetch screenshot' });
  }
};

module.exports = {
  takeAndSaveScreenshot,
  getAllScreenshots,
  getScreenshotById,
  triggerScreenshot,
};

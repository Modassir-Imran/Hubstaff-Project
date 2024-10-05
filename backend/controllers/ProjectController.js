// const Project = require('../models/CreateProject')
// const { takeAndSaveScreenshot } = require('./screenshotController')

// // Function to assign a project
// exports.assignProject = async (req, res) => {
//   try {
//     const { clientId, projectName } = req.body

//     const project = new Project({
//       clientId,
//       projectName,
//       startTime: Date.now()
//     })

//     await project.save()

//     res.json({ msg: 'Project assigned successfully!', project })
//   } catch (err) {
//     res.status(500).json({ error: err.message })
//   }
// }

// // Function to start time tracking and take screenshots
// exports.startTracking = clientId => {
//   // Set up cron job for every 10 minutes to take a screenshot for the assigned project
//   cron.schedule('*/1 * * * *', async () => {
//     const project = await Project.findOne({ clientId })

//     if (project) {
//       takeAndSaveScreenshot(project.clientId) // Use the screenshot function
//     }
//   })
// }



// const Project = require('../models/CreateProject');

// // Create a new project
// exports.createProject = async (req, res) => {

//   const { projectName } = req.body;
//   try {
//     const project = new Project({ projectName, clientId: 'unassigned' });
//     await project.save();
//     res.status(201).json(project);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // Assign a project to a client
// exports.assignProject = async (req, res) => {
//   const { projectName, clientId } = req.body;
//   try {
//     const project = await Project.findOneAndUpdate({ projectName }, { clientId }, { new: true });
//     if (!project) {
//       return res.status(404).json({ message: 'Project not found' });
//     }
//     res.json(project);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };










const Project = require('../models/CreateProject');

// Controller for creating a new project
exports.createProject = async (req, res) => {
  const { projectName } = req.body;  // Extract projectName from the request body

  if (!projectName) {
    return res.status(400).json({ message: 'Project name is required' });  // Validate if projectName is provided
  }

  try {
    const newProject = new Project({ projectName });
    await newProject.save();  // Save project to database
    res.status(201).json({ message: 'Project created successfully', project: newProject });
  } catch (err) {
    res.status(500).json({ message: 'Server error: Could not create project' });
  }
};


// Controller to get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();  // Fetch all projects from the database
    res.status(200).json({ projects });
  } catch (err) {
    res.status(500).json({ message: 'Server error: Could not fetch projects' });
  }
};


// Controller for assigning a project
exports.assignProject = async (req, res) => {
  const { projectName, clientId } = req.body;

  if (!projectName || !clientId) {
    return res.status(400).json({ message: 'Project name and client ID are required' });
  }

  try {
    const updatedProject = await Project.findOneAndUpdate(
      { projectName },
      { clientId },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json({ message: 'Project assigned successfully', project: updatedProject });
  } catch (err) {
    res.status(500).json({ message: 'Server error: Could not assign project' });
  }
};

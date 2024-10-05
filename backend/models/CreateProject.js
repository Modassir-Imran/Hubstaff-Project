const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,  // Project name is required
  },
  clientId: {
    type: String,
    default: 'unassigned',  // Default client ID
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Project', ProjectSchema);

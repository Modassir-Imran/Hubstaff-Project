const express = require('express');
const { createProject, assignProject ,getAllProjects} = require('../controllers/ProjectController');

const router = express.Router();

router.post('/create', createProject);
router.post('/assign-project', assignProject);
router.get('/all', getAllProjects);


module.exports = router;
